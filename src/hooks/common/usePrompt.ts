import { useCallback } from 'react';
import { useBlocker } from './useBlocker';

export const usePrompt = (when = true, cb: (tx: any) => void) => {
  const blocker = useCallback(
    (tx: any) => {
      // eslint-disable-next-line no-alert
      cb(tx);
    },
    [when],
  );

  useBlocker(blocker, when);
};
