import { STORAGE } from '@/configs/storage';
import Cookies from 'js-cookie';

const localStorageUtil = {
  get: (key?: string) => JSON.parse(localStorage.getItem(key || STORAGE.LOCAL_STORAGE) as string),
  set: <T>(token: T, key?: string) =>
    localStorage.setItem(key || STORAGE.LOCAL_STORAGE, JSON.stringify(token)),
  remove: (key?: string) => localStorage.removeItem(key || STORAGE.LOCAL_STORAGE),
};

const cookieStorageUtil = {
	get: (key?: string) =>
		Cookies.get(key || STORAGE.COOKIE_STORAGE)
			? JSON.parse(Cookies.get(key || STORAGE.COOKIE_STORAGE) as string)
			: undefined,
	set: <T>(token: T, key?: string, configs?: Cookies.CookieAttributes) =>
		Cookies.set(key || STORAGE.COOKIE_STORAGE, JSON.stringify(token), {
			...configs,
		}),
	remove: (key?: string) => Cookies.remove(key || STORAGE.COOKIE_STORAGE),
};
export { localStorageUtil, cookieStorageUtil };
