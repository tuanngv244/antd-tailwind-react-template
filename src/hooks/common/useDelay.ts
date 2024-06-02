import { useState, useEffect, useRef } from 'react';

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, value);

    return () => clearTimeout(timeoutRef.current);
  }, [value, delay, timeoutRef]);

  return debouncedValue;
};

export default useDebounce;
