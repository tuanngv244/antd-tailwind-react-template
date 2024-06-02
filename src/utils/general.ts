export const checkNullish = (data?: any) => {
  if (!data || (typeof data == 'string' && data == '') || data == undefined) return null;
  return data;
};

export const defaultAvatar = (name?: any) => {
  return `https://ui-avatars.com/api/?name=${name}`;
};
