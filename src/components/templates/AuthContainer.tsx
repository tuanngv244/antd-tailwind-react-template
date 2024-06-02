import { PATHNAMES } from '@/configs/pathname';
import { cookieStorageUtil } from '@/services/storage';
import { Navigate, Outlet } from 'react-router-dom';

const AuthContainer = () => {
  const { accessToken } = cookieStorageUtil.get() || {};

  if (!accessToken) return <Navigate to={PATHNAMES.LOGIN} />;

  return <Outlet />;
};

export default AuthContainer;
