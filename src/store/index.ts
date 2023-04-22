import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import globalSlice from './feature/globalSlice';
import userSlice from './feature/userSlice';
const store = configureStore({
  reducer: { globalSlice, userSlice },
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
