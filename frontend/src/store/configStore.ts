import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import property from './modules/property';

const store = configureStore({
  reducer: {
    user,
    property,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
