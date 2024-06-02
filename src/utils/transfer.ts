const checkNullish = <T>(data: T) => {
  return !data ? null : data;
};

const blobToBase64Async = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onerror = (e) => reject(fileReader.error);
    fileReader.onloadend = (e) => {
      const dataUrl = fileReader.result as string;
      // remove "data:mime/type;base64," prefix from data url
      const base64 = dataUrl.substring(dataUrl.indexOf(',') + 1);
      resolve(base64);
    };
    fileReader.readAsDataURL(blob);
  });
};

const urlToBase64Async = async (data: string): Promise<string> => {
  const res: Response = await fetch(data);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onerror = (e) => reject(fileReader.error);
    fileReader.onloadend = (e) => {
      const dataUrl = fileReader.result as string;
      // remove "data:mime/type;base64," prefix from data url
      const base64 = dataUrl.substring(dataUrl.indexOf(',') + 1);
      resolve(base64);
    };
    fileReader.readAsDataURL(blob);
  });
};

const urlToBlob = async (data: string) => {
  const res: Response = await fetch(data);
  return await res.blob();
};

const base64ToFile = async (
  data: string,
  fileName: string,
  configs?: RequestInit,
  type?: string,
) => {
  return await fetch(data, configs)
    .then((res) => res.blob())
    .then((blob) => new File([blob], fileName, { type: type ?? 'image/png' }));
};

export { checkNullish, blobToBase64Async, urlToBlob, urlToBase64Async, base64ToFile };
