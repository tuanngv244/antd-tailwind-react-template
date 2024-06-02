import axiosInstance from './restClient';
import { ENV } from '@/configs/env';

const basePath = 'upload' as const;

export const uploadApi = {
  uploadSingleFile: async ({ queryKey }: { queryKey: [string, object] }) => {
    const { data } = await axiosInstance.post(
      `${ENV.BASE_API_URL}/${basePath}/${queryKey[0]}`,
      queryKey[1],
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data?.data;
  },
  uploadMultipleFile: async ({ queryKey }: { queryKey: [string, object] }) => {
    const { data } = await axiosInstance.post(
      `${ENV.BASE_API_URL}/${basePath}/${queryKey[0]}`,
      queryKey[1],
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  },
};
