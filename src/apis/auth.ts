import axiosInstance from './restClient';
import { IFormLogin } from '@/models/login';

export const basePath = `/auth` as const;

const errorHandler = (error: any) => {
  const { message, status, response, data } = error || {};
  return Promise.reject({
    status: response?.data?.status ?? status,
    message:
      response?.data?.message ?? data?.message ?? message ?? 'Đã xảy ra lỗi. Vui lòng thử lại!',
  });
};

export const authApi = {
  async login(values: IFormLogin) {
    try {
      const res = await axiosInstance.post(`${basePath}/login`, values);
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return data;
    } catch (error: any) {
      return errorHandler(error);
    }
  },

  async register(values: any) {
    try {
      const res = await axiosInstance.post(`${basePath}/register`, values);
      if (res.data.code) throw Error(res.data.message);
      const { data } = res;
      return data;
    } catch (error: any) {
      return errorHandler(error);
    }
  },
};

export type AuthApi = typeof authApi;
