import { ReactNode } from 'react';

export const checkNullDisplay = (
  data: string | ReactNode,
  replace?: string | ReactNode,
  condition?: boolean,
) => {
  if (!data) return '---';
  if (condition == undefined)
    return typeof data == 'string' ? (data?.trim?.()?.length > 0 ? data : '---') : data;
  return condition ? data : replace ?? '---';
};
