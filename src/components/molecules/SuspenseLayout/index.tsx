import Loading from '@/components/atoms/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Loading.Page isLoading={true} />}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseLayout;
