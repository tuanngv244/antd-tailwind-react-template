export type BooleanStatus = 1 | 0;

export type Option<T extends any = string | number> = {
  label: string;
  value: T;
};
