import { combineReducers } from 'redux';
import DouchebagReducer from './douchebag.reducer'

export default combineReducers({
	DouchebagJar: DouchebagReducer
});