import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    allEmail: [],
    selectedEmail: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.allEmail = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
  },
});
export const { setOpen, setEmails, setSelectedEmail } = appSlice.actions;
export default appSlice.reducer;
