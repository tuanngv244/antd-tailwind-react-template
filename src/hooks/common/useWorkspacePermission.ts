import { authSelector } from '@/store/modules/auth/selector';
import { workSelector, workUserRoleInfoSelector } from '@/store/modules/workspace/selector';
import { EWorkspacePermission } from '@/types/permissions';
import { useSelector } from 'react-redux';

const useWorkspacePermission = (permission: EWorkspacePermission) => {
  const user = useSelector(authSelector);
  const workspaceData = useSelector(workSelector);
  const userPermissions = useSelector(workUserRoleInfoSelector)?.workspaceRole?.permissions;
  return (
    workspaceData?.createdBy === user?.id || userPermissions?.some((p: string) => p === permission)
  );
};

export default useWorkspacePermission;
