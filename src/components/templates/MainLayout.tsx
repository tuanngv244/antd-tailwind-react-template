import { Outlet } from 'react-router-dom';
import Header from '../molecules/Header/Header';
import './index.css';

import { IVIWORK_LANGUAGE_KEY } from '@/models/sidebar';
import { localStorageUtil } from '@/services/storage';
import i18next from 'i18next';
import { useEffect } from 'react';

const MainLayout = () => {
  useEffect(() => {
    const language = localStorageUtil.get(IVIWORK_LANGUAGE_KEY) ?? 'vi';
    i18next.changeLanguage(`${language}`);
    i18next.changeLanguage('vi');
  }, []);

  return (
    <div className=" h-screen w-full text-white text-sm font-normal">
      <Header />
      <div className=" flex">
        <main className="h-full flex-1 overflow-auto bg-theme-lightContainer dark:bg-theme-dark">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
