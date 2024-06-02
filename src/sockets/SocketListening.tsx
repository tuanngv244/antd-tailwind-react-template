import { AppDispatch } from '@/store';
import { eventEmitter } from '@/utils/eventEmitter';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import SocketCard from './SocketCard';
const SocketListening = () => {
  const timoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (timoutRef.current) clearTimeout(timoutRef.current);
    // -------------- listen event of new notification ------------- //
    eventEmitter.addListener('new_notification', (data: { data: any }) => {
      timoutRef.current = setTimeout(() => {}, 5000);
    });

    return () => {
      // eventEmitter.removeCurrentListener();
      eventEmitter.removeAllListeners();
      timoutRef.current && clearTimeout(timoutRef.current);
    };
  }, []);
  return <div>{<SocketCard />}</div>;
};

export default SocketListening;
