import { permissions } from '@/store/modules/auth/selector';
import { Permission } from '@/types/permissions';
import { useSelector } from 'react-redux';

const useHasPermision = (permision: Permission) => {
  const permisionsUser = useSelector(permissions);

  return (permisionsUser ?? []).some((p) => p === permision);
};

export default useHasPermision;
