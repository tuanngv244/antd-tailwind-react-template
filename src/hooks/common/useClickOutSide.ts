import { voidFunc } from '@/models/utils';
import { useEffect } from 'react';

export const useClickOutSide = (
  ref: React.MutableRefObject<any>,
  handler: voidFunc,
  ele?: Element,
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) |
          (ele?.contains && (ele?.contains(event?.target) as any))
      ) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
