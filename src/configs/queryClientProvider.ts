import { QueryCache, QueryClient } from '@tanstack/react-query';
import axiosInstance from '@/apis/restClient';
import { ENV } from './env';

const defaultQueryFunc = async ({ queryKey, ...params }: any) => {
  const { data } = await axiosInstance.get(`${ENV.BASE_API_URL}/${queryKey[0]}`, {
    params: params,
  });
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFunc,
    },
  },
});

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
  onSettled: (data, error) => {
    console.log(data, error);
  },
});

export { defaultQueryFunc, queryClient, queryCache };
