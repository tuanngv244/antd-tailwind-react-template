export interface IPagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export type voidFunc = () => void;

export type Option = {
  label: string;
  value: any;
};
export interface IBaseEntity {
  createdBy?: string;
  updateAt?: number;
  createdAt?: number;
}
