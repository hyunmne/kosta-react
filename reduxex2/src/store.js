import { configureStore } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
// import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./reducer";

// const store = configureStore({reducer:rootReducer})

const persistConfig = {
    key:'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({reducer:{persistedReducer},
        middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
})

export default store;