import { ENV } from '@/configs/env';
import { eventEmitter } from '@/utils/eventEmitter';
import { tokenMethod } from '@/utils/token';
import { useEffect } from 'react';
import { Socket, io } from 'socket.io-client';

interface ServerToClientEvents {
  notification: (data: string) => void; // ---> JSON of notification
}
interface ClientToServerEvents {}

const SocketNotification = () => {
  const socketInstance: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    ENV.SOCKET_API_URL,
    {
      transports: ['polling'],
      forceNew: true,
      path: '/ws',
      // autoConnect: true,
      reconnection: true,
      extraHeaders: {
        Authorization: `Bearer ${tokenMethod.get()?.accessToken}`,
      },
    },
  );

  useEffect(() => {
    if (!tokenMethod.get()?.accessToken) return;
    socketInstance.on('connect', () => {
      console.log('View 💕-> connect IO successfully!');
    });
    socketInstance.on('notification', (notification: string) => {
      const parseData: { data: any } = notification && JSON.parse(notification);
      eventEmitter.emit('new_notification', parseData);
    });

    return () => {
      socketInstance.disconnect();
      socketInstance.removeAllListeners();
      // eventEmitter.removeAllListeners();
    };
  }, []);

  return <div></div>;
};

export default SocketNotification;
