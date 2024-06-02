import { EWorkspacePermission, Permission } from '@/types/permissions';
import { permissions } from '@/store/modules/auth/selector';
import { useSelector } from 'react-redux';

export const useHasPermission = (
  permissionUser: Permission | EWorkspacePermission,
  configs?: { listPermissions?: string[]; checkWSP: boolean },
) => {
  const permission = useSelector(permissions);
  if (configs?.checkWSP) return configs?.listPermissions?.includes(permissionUser);
  return permission?.includes(permissionUser as Permission);
};
