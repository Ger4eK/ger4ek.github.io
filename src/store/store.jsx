import { configureStore } from '@reduxjs/toolkit';
import announcements from './slice/announcement-slice';

const store = configureStore({
  reducer: {
    announcements,
  },
});

export default store;
