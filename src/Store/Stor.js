import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Reducers/ReducerAuth';
import wishListReducer from '../Reducers/ReducerWishlist';
import cartReducers from '../Reducers/ReducerCart';
import contactReducers from '../Reducers/ReduxContact';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Configure persist for specific reducers
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'wishList', 'cart'], // Only persist these reducers
};

const rootReducer = combineReducers({
  auth: authReducer,
  wishList: wishListReducer,
  cart: cartReducers,
  contact: contactReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
