/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux'
import ReactIntro from "./pages/ReactIntro";
import {persistor, store} from './store'
import {PersistGate} from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ReactIntro/>
        </PersistGate>
    </Provider>
  );
};


export default App;
