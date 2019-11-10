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
import {Spinner} from "./components/Spinner";
import AppIntro from "./pages/AppIntro/AppIntro";

const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={<Spinner/>} persistor={persistor}>
            <AppIntro/>
        </PersistGate>
    </Provider>
  );
};


export default App;
