import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers/index';
import rootSaga from "./sagas";

const persistConfig = {
	key: 'root',
	debug: true,
	storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);