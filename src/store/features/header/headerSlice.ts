import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
  title: string;
  showBackButton: boolean;
  backUrl: string;
}

const initialState: HeaderState = {
  title: "",
  showBackButton: false,
  backUrl: "",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<Partial<HeaderState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectHeaderState = (state: RootState) => state.header;
export const { setHeader } = headerSlice.actions;
export default headerSlice.reducer;
