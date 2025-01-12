// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer
//     }
// })

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);