import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: undefined,
};
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // might not use this method
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  saveUser,
  // resetDataSlice
} = dataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default dataSlice.reducer;
