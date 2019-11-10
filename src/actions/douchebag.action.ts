import {Action} from "./actions";

export const nameSpace = 'DOUCHEBAG_';

const InitDoucheBagType = nameSpace + 'INIT';
export type InitDouchebag = Action<typeof InitDoucheBagType, {}>;
export const InitDouchebag = (): InitDouchebag => ({
	type: InitDoucheBagType
});
InitDouchebag.type = InitDoucheBagType;

const IntroductionFinishedType = nameSpace+'INTRODUCTION_FINISHED';
export type IntroductionFinished = Action<typeof IntroductionFinishedType, {}>;
export const IntroductionFinished = (): IntroductionFinished => ({
	type: IntroductionFinishedType,
});
IntroductionFinished.type = IntroductionFinishedType;
