import { DoucheBagState } from "../types/douchebag.types";
import {InitDouchebag, IntroductionFinished} from "../actions/douchebag.action";
import { ActionReducer } from "./Reducer";

const INITIAL_STATE: DoucheBagState = {
	introDone: false
};

const reduceIntroductionFinished: ActionReducer<DoucheBagState, IntroductionFinished> = (state, action) => ({
	...state,
	introDone: true
});


type DouchebagActions = InitDouchebag | IntroductionFinished;

const reducer = (state: DoucheBagState = INITIAL_STATE, action: DouchebagActions) => {
	switch (action.type) {
		case InitDouchebag.type:
			return {
				...INITIAL_STATE
			};
		case IntroductionFinished.type:
			return reduceIntroductionFinished(state, action as IntroductionFinished);
		default:
			return state;
	}
};

export default reducer;