import { ICLogoHeaderDrak, ICLogoHeaderLight, ICMenuFoldOff, ICMenuFoldOn } from '@/assets/icons';
import { PATHNAMES } from '@/configs/pathname';
import { IVIWORK_MENU_KEY, generateString } from '@/models/sidebar';
import { localStorageUtil } from '@/services/storage';
import { sidebarActions } from '@/store/modules/sidebar';
import { isShowMenu, theme } from '@/store/modules/sidebar/selector';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Account, Notification, Theme } from './Partials';
import { useEffect } from 'react';

const Header = () => {
  return (
    <div className="wrapper__header dark:bg-theme-darkContainer flex gap-4 items-center border-lightContainer dark:border-darkContainer border-b border-solid">
      <Logo />
      <div className="wrapper__header--right flex-1 flex items-center justify-end pr-4 h-[48px]">
        {/* <Language /> */}
        {/* <Theme /> */}
        <Notification />
        <Account />
      </div>
    </div>
  );
};

export default Header;

const Logo = () => {
  const showMenu = useSelector(isShowMenu);
  const themeHeader = useSelector(theme);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    if (showMenu) {
      localStorageUtil.remove(IVIWORK_MENU_KEY);
    } else {
      localStorageUtil.set(generateString(20), IVIWORK_MENU_KEY);
    }
    return dispatch(sidebarActions.setIsShowMenu({ isShowMenu: !showMenu }));
  };

  useEffect(() => {
    const isMenu = localStorageUtil.get(IVIWORK_MENU_KEY) ? true : false;
    dispatch(sidebarActions.setIsShowMenu({ isShowMenu: isMenu }));
  }, []);

  return (
    <div className="w-[208px] flex gap-4 items-center justify-between pl-4">
      <NavLink to={PATHNAMES.WORKS}>
        {/* {themeHeader === 'light' ? <ICLogoHeaderDrak /> : <ICLogoHeaderLight />} */}
        <ICLogoHeaderLight />
      </NavLink>

      <div className="menu cursor-pointer icon-theme" onClick={handleShowMenu}>
        {showMenu ? <ICMenuFoldOn /> : <ICMenuFoldOff />}
      </div>
    </div>
  );
};
