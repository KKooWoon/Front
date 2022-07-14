import { combineReducers } from '@reduxjs/toolkit';
import layoutSlice from './layout';

const rootReducer = combineReducers({
  layout: layoutSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
