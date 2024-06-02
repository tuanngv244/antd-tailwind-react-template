import { IDepartment } from './department';
import { IRole } from './role';
import { Permission } from '@/types/permissions';

export interface IUser {
  id: string | number;
  name: string;
  email: string;
  code: string;
  gender: EGENDER;
  status: ESTATUS;
  image: string;
  phoneNumber: string;
  address: IAddress | null;
  permissions: Permission[];
  roleId?: number;
  signatureDefault: ISignatureDefault;
  workspaceColor: string;
  owner: boolean;
  listRoles: string;
  department?: IDepartment;
  position?: IDepartment;
  password?: string;
  departmentId?: string;
  positionId?: string;
  roleIds?: number[];
  roles?: IRole[];
}

export enum EGENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNIDENTIFIED = 'UNIDENTIFIED',
}

export enum ESTATUS {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export const optionsGender = [
  { label: 'Nam', value: EGENDER.MALE },
  { label: 'Nữ', value: EGENDER.FEMALE },
  { label: 'Khác', value: EGENDER.UNIDENTIFIED },
];

interface IAddress {
  address: string;
  wardName: string;
  districtName: string;
  cityName: string;
}

interface ISignatureDefault {
  name: string;
  taxCode: string;
  image: string;
  status: ESTATUS;
  userId: string;
  isDefault: boolean;
  sampleSignature: string;
}
