import type { AppDispatch } from './../store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'reducer';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
