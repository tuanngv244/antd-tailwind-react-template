import { EDevice } from '@/models/general';

export const useDevice = () => {
  const device = () => {
    const width = window.innerWidth;
    if (width < 767) return EDevice.MOBILE;
    if (768 <= width && width < 1024) return EDevice.TABLET;
    if (1024 <= width && width < 1280) return EDevice.LAPTOP;
    if (1280 <= width && width < 1536) return EDevice.LAPTOP_LG;
    return EDevice.DESKTOP;
  };

  return {
    currentDevice: device(),
    device: EDevice,
  };
};
