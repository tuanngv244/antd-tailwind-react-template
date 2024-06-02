const isEmail = (email: string) => {
  const regex =
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

  if (!email) return false;
  if (!regex.test(email)) return false;
  return true;
};

const regexPassword = (value: string): boolean => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$/;
  const check = regex.test(value);
  if (check) {
    return true;
  } else return false;
};

const removeVietnameseDiacritics = (str: string) => {
  return str?.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const isPhoneNumber = (phone?: string) => {
  const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

  if (!phone) return false;
  if (!regex.test(phone)) return false;
  return true;
};

const slugify = (str: string) => {
  return String(str)
    .normalize('NFD') // split accented characters into their base characters and diacritical marks
    .replace(/[đĐ]/g, (m) => (m === 'đ' ? 'd' : 'D'))
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
};

/// check Invalid format file images ///
const inValidFileImage = (
  event: React.ChangeEvent<HTMLInputElement>,
  isArr?: boolean,
  acceptFileTypes?: string[],
) => {
  const acceptTypes = acceptFileTypes ?? ['png', 'jpg', 'jpeg']; /// type file image accept
  const file = event.target.files?.item(0);
  const fileType = file?.type;
  const type = fileType?.replace('image/', '');
  if (!isArr) return acceptTypes.includes(type as string);
  const fileList = event.target.files;
  if (!fileList) return false;
  const fileTypes = Object.values(fileList).map((file) =>
    file?.name?.slice(file?.name?.lastIndexOf('.') + 1, file?.name?.length),
  );
  return fileTypes?.every((file) => acceptTypes.includes(file));
};

/// check Invalid format file images ///
const inValidFileValues = (files: File | File[], isArr?: boolean, acceptFileTypes?: string[]) => {
  const acceptTypes = acceptFileTypes ?? ['png', 'jpg', 'jpeg']; /// type file image accept
  const file: any = files;
  const fileType = file?.type;
  const type = fileType?.replace('image/', '');
  if (!isArr) return acceptTypes.includes(type as string);
  const fileList = files;
  if (!fileList) return false;
  const fileTypes = Object.values(fileList).map((file) =>
    file?.name?.slice(file?.name?.lastIndexOf('.') + 1, file?.name?.length),
  );
  return fileTypes?.every((file) => acceptTypes.includes(file));
};

/// check size image
const inValidateSizeFile = (files: File | File[], isArr?: boolean) => {
  if (!files) return;
  if (!isArr && !Array.isArray(files)) return files.size / 1024 < 5 * 1024; /// check file > 5MB
  return (files as File[]).every((file) => file.size / 1024 < 5 * 1024);
};

export {
  inValidFileImage,
  inValidFileValues,
  inValidateSizeFile,
  isEmail,
  slugify,
  regexPassword,
  isPhoneNumber,
  removeVietnameseDiacritics,
};
