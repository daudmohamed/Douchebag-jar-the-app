import {createAction} from "typesafe-actions";

export const INTRODUCTION_FINISHED = createAction('INTRODUCTION_FINISHED', action => {
	return () => action({introDone: true});
});