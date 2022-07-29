import { createSlice } from '@reduxjs/toolkit';
import { OnBoading } from '@typings/user';

const initialState: OnBoading = {
  nickname: '',
  age: 0,
  body_spec: {
    height: '',
    weight: '',
    fat: '',
    muscle: '',
  },
  interest: [],
  isActive: false,
};

const onBoadingSlice = createSlice({
  name: 'onBoading',
  initialState,
  reducers: {
    setActive(state, action) {
      state.isActive = action.payload;
    },
    setNickname(state, action) {
      state.nickname = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    setInterest(state, action) {
      if (state.interest.includes(action.payload)) {
        state.interest = state.interest.filter(v => v !== action.payload);
      } else {
        if (state.interest.length >= 3) {
          state.interest.shift();
          state.interest = state.interest.concat(action.payload);
        } else {
          state.interest = state.interest.concat(action.payload);
        }
      }
    },
    setHeight(state, action) {
      state.body_spec.height = action.payload;
    },
    setWeight(state, action) {
      state.body_spec.weight = action.payload;
    },
    setFat(state, action) {
      state.body_spec.fat = action.payload;
    },
    setMuscle(state, action) {
      state.body_spec.muscle = action.payload;
    },
  },
});

export default onBoadingSlice;
