export type TagStatus = {
  color: string;
  name: string;
  status: string;
};

export interface IPagination {
  pageNumber: number;
  totalPages?: number;
  totalElements: number;
  pageSize: number;
}

export interface IMetadata<T> extends IPagination {
  data: T;
}

export enum EDevice {
  'MOBILE' = 'MOBILE',
  'TABLET' = 'TABLET',
  'LAPTOP' = 'LAPTOP',
  'LAPTOP_LG' = 'LAPTOP_LG',
  'DESKTOP' = 'DESKTOP',
}
