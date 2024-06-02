import { PATHNAMES } from '@/configs/pathname';
import { permissions } from '@/store/modules/auth/selector';
import { Permission } from '@/types/permissions';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type Props = {
  isOpenModal?: boolean;
};

export const PageWithPermission = (
  WrappedComponent: any,
  permission: Permission,
  navigate?: string,
) => {
  return function PageWithPermissionWrapper(props?: any) {
    const permissionUser = useSelector(permissions);

    if (!permissionUser) return;
    if (permissionUser?.includes(permission)) return <WrappedComponent {...props} />;
    return <Navigate to={navigate ?? PATHNAMES.WORKS} />;
  };
};
