import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import loginServiceSlice from './slices/loginSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = combineReducers({
    user: loginServiceSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
});

export default store;