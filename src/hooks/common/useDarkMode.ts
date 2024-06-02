import { STORAGE } from '@/configs/storage';
import { darkMode } from '@/constants/variable';
import { localStorageUtil } from '@/services/storage';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const storageTheme = localStorageUtil.get(STORAGE.DARK_MODE_STORAGE);
  const [theme, setTheme] = useState(storageTheme ?? 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(storageTheme);
    root.classList.add(theme);
    localStorageUtil.set(theme, STORAGE.DARK_MODE_STORAGE);
  }, [theme, storageTheme]);

  return {
    theme,
    toggleTheme: () => setTheme(theme === darkMode.dark ? darkMode.light : darkMode.dark),
  };
};

export default useDarkMode;
