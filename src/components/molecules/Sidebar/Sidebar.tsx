import { ICMenuSubmenuArrowUp } from '@/assets/icons';
import Tippy from '@/components/atoms/Tippy/Tippy';
import {
  IIsSubMenu,
  INavSidebar,
  INavSub,
  findIndexSidebar,
  isSubMenuDefault,
  navSidebar,
} from '@/models/sidebar';
import { AppDispatch } from '@/store';
import { permissions } from '@/store/modules/auth/selector';
import { isShowMenu } from '@/store/modules/sidebar/selector';
import { signatureActions } from '@/store/modules/signature';
import { Permission } from '@/types/permissions';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const showMenu = useSelector(isShowMenu);
  const permissionUser = useSelector(permissions);
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const [isSubMenu, setIsSubMenu] = useState<IIsSubMenu>(isSubMenuDefault);
  const navigate = useNavigate();

  const menuSidebar = useMemo(() => {
    if (!permissionUser) return;
    return navSidebar.filter((item) => {
      const permissionList = item.permission;
      if (!permissionList) {
        return item;
      }
      return permissionUser.some((element) => permissionList.includes(element as Permission));
    });
  }, [permissionUser]);

  const handleShowSubMenu = (nav: INavSidebar, index: number) => {
    if (!nav?.navSub) {
      dispatch(signatureActions.updateNextPath(nav?.path));
      setIsSubMenu({ indexCurrent: index, isCurrent: true });
      return navigate(nav.path);
    } else {
      if (index === isSubMenu.indexCurrent)
        return setIsSubMenu((prev) => ({
          ...prev,
          isCurrent: !prev?.isCurrent,
        }));
      return setIsSubMenu({ indexCurrent: index, isCurrent: true });
    }
  };

  useEffect(() => {
    findIndexSidebar(pathname, (data: any) => {
      setIsSubMenu(data);
    });
  }, []);

  return (
    <div className="bg-theme-light dark:bg-theme-darkContainer dark:border-darkContainer border-lightContainer border-r border-solid">
      <div
        className={`wrapper__sidebar h-full transition-all ${showMenu ? 'w-[47px]' : 'w-[208px]'}`}
      >
        {menuSidebar?.map((nav: INavSidebar, idx: number) => {
          return (
            <div key={idx}>
              <Item
                data={nav}
                index={idx}
                isSubMenu={isSubMenu}
                onClick={handleShowSubMenu}
                isShowMenu={showMenu}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

const Item = React.memo(
  ({
    data,
    index,
    isSubMenu,
    onClick,
    isShowMenu,
  }: {
    data: INavSidebar;
    index: number;
    isSubMenu: IIsSubMenu;
    onClick: (nav: INavSidebar, index: number) => void;
    isShowMenu?: boolean;
  }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const Icon = data?.icon;
    const navigate = useNavigate();
    const [indexCurrent, setIndexCurrent] = useState<number>();

    useEffect(() => {
      findIndexSidebar(pathname, (data: IIsSubMenu) => {
        setIndexCurrent(data?.indexCurrent);
      });
    }, [pathname]);

    const handleNavigate = (sub: any) => {
      dispatch(signatureActions.updateNextPath(sub));
      navigate(sub);
    };

    return (
      <div className="hover:dark:bg-hoverBg06">
        <Tippy
          classNameTitle="bg-theme-light dark:bg-theme-darkContainer min-w-[140px]"
          data={
            <div>
              <div className="flex items-center justify-between gap-4 p-2">
                <div className="text-[14px] text-85 dark:text-white">{data?.name}</div>
                <div className="rotate-180 icon-theme">
                  <ICMenuSubmenuArrowUp />
                </div>
              </div>
              {data?.navSub?.map((sub: INavSub, idx: number) => {
                return (
                  <ItemSubMenu
                    className="pl-5"
                    data={sub}
                    key={idx}
                    onClick={() => {
                      handleNavigate(sub?.path);
                    }}
                  />
                );
              })}
            </div>
          }
          trigger="hover"
          disabled={!isShowMenu || data?.navSub === undefined}
          placement="leftTop"
          rootClassName="wrapper_sidebar"
        >
          <div
            className={`group cursor-pointer h-10 hover:text-primary hover:dark:text-white hover:dark:bg-hoverBg06 hover:bg-hoverLight hover:transition-all flex items-center justify-between px-4 transition-all border-solid border-r-2 hover:border-blueSidebar ${
              indexCurrent === index
                ? 'bg-hoverLight dark:bg-hoverBg06 border-blueSidebar'
                : 'border-transparent'
            }`}
            onClick={() => onClick(data, index)}
          >
            <div className="flex items-center justify-start gap-4">
              <div
                className={`icon-theme ${
                  isSubMenu?.isCurrent && indexCurrent === index ? 'active' : ''
                }`}
              >
                <Icon />
              </div>
              <span
                className={`${
                  !isShowMenu ? 'visible block' : 'invisible hidden'
                } whitespace-nowrap font-normal text-sm group-hover:text-primary group-hover:dark:text-white text-85 dark:text-white ${
                  isSubMenu?.isCurrent && indexCurrent === index ? 'text-primary' : ''
                }`}
              >
                {t(data?.name)}
              </span>
            </div>

            {data?.navSub && !isShowMenu && (
              <div
                className={`${
                  isSubMenu?.isCurrent && indexCurrent === index ? '' : 'rotate-180'
                } transition-all icon-theme ${
                  isSubMenu?.isCurrent && indexCurrent === index ? 'active' : ''
                }`}
              >
                <ICMenuSubmenuArrowUp />
              </div>
            )}
          </div>
        </Tippy>

        {data?.navSub && !isShowMenu && (
          <div
            className={`${
              isSubMenu?.isCurrent && isSubMenu?.indexCurrent === index ? 'visible' : 'invisible'
            } ${
              isSubMenu?.isCurrent && isSubMenu?.indexCurrent === index
                ? 'opacity-100'
                : 'opacity-0'
            } transition-all`}
            style={{
              height:
                isSubMenu?.isCurrent && isSubMenu?.indexCurrent === index
                  ? `${data?.navSub?.length * 40}px`
                  : 0,
            }}
          >
            {data?.navSub?.map((sub: INavSub, idx: number) => {
              return (
                <ItemSubMenu
                  data={sub}
                  key={idx}
                  onClick={() => {
                    handleNavigate(sub?.path);
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

const ItemSubMenu = React.memo(({ data, onClick, className }: any) => {
  const { t } = useTranslation();
  return (
    <div
      className={`cursor-pointer h-10 hover:text-primary hover:dark:text-white hover:bg-hoverLight hover:dark:bg-hoverBg06 hover:transition-all flex items-center justify-start pl-12 border-solid border-r-2 border-transparent hover:border-blueSidebar whitespace-nowrap text-85 dark:text-white ${
        className ?? ''
      }`}
      onClick={onClick}
    >
      {t(data?.name)}
    </div>
  );
});
