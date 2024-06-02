const updatedArrayRecord = <T>(
  array: T[],
  data: T,
  configs: {
    key: keyof T;
  },
) => {
  const { key } = configs;
  return array.map((entity: T) => (entity[key] === data[key] ? data : entity));
};

const deletedArrayRecord = <T>(
  array: T[],
  data: keyof T,
  configs: {
    key: keyof T;
  },
) => {
  const { key } = configs;
  return array.filter((entity: T) => entity[key] !== data);
};

const addedArrayRecord = <T>(array: T[], data: T) => {
  return array.unshift(data);
};

const checkArrLength = <T>(arr: T[]) => (!!arr?.length ? arr : []);

export { updatedArrayRecord, deletedArrayRecord, addedArrayRecord, checkArrLength };
