import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex justify-center items-center">
      <Result status="404" title="404" subTitle={t('Không tìm thấy đường dẫn')} />
    </div>
  );
};

export default Page404;
