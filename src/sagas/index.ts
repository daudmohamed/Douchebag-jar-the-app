import { all, call } from 'redux-saga/effects'
import DouchebagSagas from './douchebag.sagas'

export default function* rootSaga() {
	yield all([call(DouchebagSagas)])
};