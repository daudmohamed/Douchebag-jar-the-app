export const nameSpace = 'DOUCHEBAG_';
export const actionTypes = {
	INTRODUCTION_FINISHED: nameSpace+'INTRODUCTION_FINISHED'
};

export type Action<T extends string, payload extends {}> = {
	type: T
} & payload;