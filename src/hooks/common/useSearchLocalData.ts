import filter from "lodash/filter";
export const useSearchLocalData = <T extends object = any>(
	originalData: T[],
	field: string,
	value?: string
) => {
	if (!!!value?.length) return originalData;
	return filter(originalData, (entity) => {
		//@ts-ignore
		return entity[field]?.toLowerCase()?.includes(value?.toLowerCase());
	});
};
