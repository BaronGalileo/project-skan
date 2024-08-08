import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import authReducer from './authSlice'
import resultDataReducer from './resultDataSlice'
import histogramsReducer from './histogramsSlice'


const rootReducer = combineReducers({
  auth: authReducer,
  resultDataFromSearch: resultDataReducer,
  histograms: histogramsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
 }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store) 
export  default store;