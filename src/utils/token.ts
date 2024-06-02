import { cookieStorageUtil } from "@/services/storage";

const tokenMethod = {
	get: () => {
		return cookieStorageUtil.get();
	},
	set: <T>(token: T) => {
		cookieStorageUtil.set<T>(token);
	},
	remove: () => {
		cookieStorageUtil.remove();
	},
};

export { tokenMethod };
