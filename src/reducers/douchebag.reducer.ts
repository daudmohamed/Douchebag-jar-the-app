import {DoucheBagState} from "../types/douchebag.types";
import {ActionType, getType} from 'typesafe-actions';
// @ts-ignore
import * as actions from '../actions';
import {INTRODUCTION_FINISHED} from "../actions/douchebag.action";

type DouchebagActions = ActionType<typeof actions>;

const INITIAL_STATE: DoucheBagState = {
	introDone: false
};

const reducer = (state: DoucheBagState = INITIAL_STATE, action: DouchebagActions) => {
	switch (action.type) {
		case getType(INTRODUCTION_FINISHED()):
			return {
				...state,
				introDone: action.payload.introDone
			};
		default:
			return state;
	}
};

export default reducer;