import { ICNotification } from '@/assets/icons';
import NotificationPanel from '@/components/organisms/NotificationPanel';
import { useBoolean } from '@/hooks';
import { useNotificationPage } from '@/pages/Notifications/Partials/useNotificationPage';
import { Popover } from 'antd';

const Notification = () => {
  const [openNotification, { toggle: toggleNotification }] = useBoolean();
  const { notificationProps } = useNotificationPage();
  const { totalReadFalseNotification } = notificationProps;
  return (
    <Popover
      trigger="click"
      open={openNotification}
      onOpenChange={toggleNotification}
      placement="bottom"
      arrow={false}
      content={<NotificationPanel offNotification={toggleNotification} />}
    >
      <div className="relative h-full">
        <div className=" flex items-center justify-center h-full px-2 hover:bg-hoverBgLight hover:dark:bg-hoverBg06">
          <div className="p-2 rounded-full cursor-pointer icon-theme">
            <ICNotification />
          </div>
        </div>
        <div className="notifi rounded-full bg-error w-5 h-5  absolute top-1 -right-1 flex justify-center items-center">
          <span className="text-ssm">{totalReadFalseNotification}</span>
        </div>
      </div>
    </Popover>
  );
};

export default Notification;
