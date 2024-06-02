import {
  ICAccount,
  ICEN,
  ICInfoAccount,
  ICKey,
  ICLogout,
  ICMeet,
  ICNote,
  ICSetting,
  ICSignature,
  ICVi,
  ICWork,
  ICWrapper,
} from '@/assets/icons';
import { PATHNAMES } from '@/configs/pathname';
import { Permission } from '@/types/permissions';
export const IVIWORK_MENU_KEY: string = 'iviwork_menu_key';
export const IVIWORK_LANGUAGE_KEY: string = 'iviwork_language_key';
export const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length: number) {
  let result: string = '';
  const charactersLength: number = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export interface INavSidebar {
  id: number;
  name: string;
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  navSub?: INavSub[];
  permission?: Permission[];
  isHasPermission?: boolean;
}

export interface INavSub {
  name: string;
  path: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const navSidebar: INavSidebar[] = [
  // {
  //   id: 1,
  //   name: 'Tổng quan',
  //   path: PATHNAMES.DASHBOARD,
  //   icon: ICWrapper,
  // },
  {
    id: 2,
    name: 'Công việc',
    path: PATHNAMES.WORKS,
    icon: ICWork,
    isHasPermission: true,
    navSub: [
      {
        name: 'Không gian làm việc',
        path: PATHNAMES.WORKS,
      },
      {
        name: 'Công việc của tôi',
        path: PATHNAMES.MYJOBS,
      },
    ],
  },
  // {
  //   id: 4,
  //   name: 'Họp',
  //   path: PATHNAMES.MEETING,
  //   icon: ICMeet,
  // },
  {
    id: 3,
    name: 'Ký số',
    path: PATHNAMES.REQUEST_SIGNATURES,
    icon: ICSignature,
    isHasPermission: true,
  },
  {
    id: 5,
    name: 'Ghi chú',
    path: PATHNAMES.NOTE,
    icon: ICNote,
    isHasPermission: true,
  },
  {
    id: 4,
    name: 'Nhân viên',
    path: PATHNAMES.STAFF,
    icon: ICAccount,
    permission: [
      Permission.VIEW_DEPARTMENT,
      Permission.VIEW_POSITION,
      Permission.VIEW_USER,
      Permission.VIEW_ROLE,
    ],
    isHasPermission: true,
    // navSub: [
    //   {
    //     name: 'Thông tin công ty',
    //     path: PATHNAMES.PACKAGES,
    //   },
    //   {
    //     name: 'Nhân viên',
    //     path: PATHNAMES.STAFF,
    //   },
    // ],
  },
];

export interface IIsSubMenu {
  indexCurrent: number;
  isCurrent: boolean;
}

export const isSubMenuDefault: IIsSubMenu = {
  indexCurrent: 0,
  isCurrent: true,
};

export interface IChangeLanguage {
  icon: any;
  name: string;
  value: string;
}

export const dataLanguage: IChangeLanguage[] = [
  {
    icon: ICVi,
    name: 'Tiếng việt',
    value: 'vi',
  },
  {
    icon: ICEN,
    name: 'English',
    value: 'en',
  },
];

export interface IAccountHeader {
  name: string;
  path?: string;
  action?: () => void;
  icon: any;
}

export const dataSelelctAccount: (
  callbackLogout: () => void,
  callbackChangePassword: () => void,
) => IAccountHeader[] = (callbackLogout: () => void, callbackChangePassword: () => void) => {
  return [
    {
      name: 'Thông tin cá nhân',
      path: PATHNAMES.ME,
      icon: ICInfoAccount,
    },
    {
      icon: ICKey,
      name: 'Đổi mật khẩu',
      action: callbackChangePassword,
    },
    {
      icon: ICLogout,
      name: 'Đăng xuất',
      action: callbackLogout,
    },
  ];
};

export const findIndexSidebar = (pathname: string, callback: (data: IIsSubMenu) => void) => {
  const findIndex = navSidebar.findIndex((i: INavSidebar) => i?.path === pathname);
  if (findIndex !== -1) {
    callback({ indexCurrent: findIndex, isCurrent: true });
  } else {
    navSidebar?.map((i: INavSidebar, idx: number) => {
      if (i?.navSub) {
        const findIndexSub = i?.navSub?.findIndex((sub: INavSub) => sub?.path === pathname);
        if (findIndexSub !== -1) {
          callback({ indexCurrent: idx, isCurrent: true });
        }
      }
    });
  }
};
