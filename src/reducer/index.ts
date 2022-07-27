import { combineReducers } from '@reduxjs/toolkit';
import onBoadingSlice from './onboading';

const rootReducer = combineReducers({
  onboading:onBoadingSlice.reducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
