import { HOST_WORK_IVI } from '@/constants/env';

const getStoreAliasFromHostname = () => {
  const { hostname } = window.location;
  if (hostname.endsWith(HOST_WORK_IVI)) {
    const subdomain = hostname.replace(HOST_WORK_IVI, '');
    const paths = subdomain.split('.');
    if (paths.length === 2) {
      return paths[0];
    }
  }
  return null;
};

export { getStoreAliasFromHostname };
