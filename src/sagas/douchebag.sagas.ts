import { takeEvery } from 'redux-saga/effects'

function* testSagas(){
	console.log("Saga works!")
}

export default function* sagas () {
	yield takeEvery("TEST",testSagas)
}