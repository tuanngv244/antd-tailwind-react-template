import { BASE_URL } from '@/constants/env';
import { IVIWORK_LANGUAGE_KEY } from '@/models/sidebar';
import { localStorageUtil } from '@/services/storage';
import { tokenMethod } from '@/utils/token';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept-Language': localStorageUtil.get(IVIWORK_LANGUAGE_KEY)
      ? `${localStorageUtil.get(IVIWORK_LANGUAGE_KEY)}`
      : 'vi',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 403 || error.response?.status === 401) &&
      !!!originalRequest._retry &&
      tokenMethod.get()
    ) {
      originalRequest._retry = true;
      try {
        // const res = await axiosInstance.put('/customer/refresh', {
        //   refreshToken: tokenMethod.get()?.refreshToken,
        // });
        // const { token: accessToken, refreshToken } = res.data.data || {};

        // tokenMethod.set({
        //   accessToken,
        //   refreshToken,
        // });

        // originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        tokenMethod.remove();
      }
    }

    return Promise.reject(error?.response);
  },
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${tokenMethod?.get()?.accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
