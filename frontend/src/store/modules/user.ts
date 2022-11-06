import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit';

export interface User {
  value: {
    name: string;
    businessName: string;
    permission: string;
  };
}

const initialState: User = {
  value: {
    name: '장성남',
    businessName: '하울공인중개사',
    permission: 'admin',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
