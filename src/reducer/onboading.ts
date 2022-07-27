import { createSlice } from '@reduxjs/toolkit';
import { OnBoading } from '@typings/user';

const initialState: OnBoading = {
  nickname: '',
  age: 0,
  body_spec: {
    height: 0,
    weight: 0,
    fat: 0,
    muscle: 0,
  },
  interest: [],
  isActive:true,
};

const onBoadingSlice = createSlice({
  name:'onBoading',
  initialState,
  reducers:{
    toggleActive(state,action) {
      state.isActive = !state.isActive;
    },
    setNickname(state,action) {
      state.nickname = action.payload
    },
    setAge(state, action){
      state.age = action.payload;
    },
    setInterest(state,action){
      state.interest = action.payload;
    },
    setSpec(state,action) {
      state.body_spec = action.payload;
    }
  }
});

export default onBoadingSlice;