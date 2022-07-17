import { createSlice } from '@reduxjs/toolkit';
import { pageLayout } from '@typings/layout';

const initialState: pageLayout = {
  header: undefined,
  noNav:undefined,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
  
  },
});

export default layoutSlice;
