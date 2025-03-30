import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/store/features/header/headerSlice";
import contactReducer from "@/store/features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
