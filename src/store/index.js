import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['welcome']
};

const mainReducer = persistReducer(persistConfig, reducers);

const storeConfig = createStore(
    mainReducer,
    {},
    applyMiddleware(ReduxThunk)
);

export const store = storeConfig;
export const persistor = persistStore(store);

