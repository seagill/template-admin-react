import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import golabSlice from './feture/globalSlice';
const store = configureStore({
  reducer: { golabSlice },
});

export default store;
export type StoreState = ReturnType<typeof store.getState>;
type StoreDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;
