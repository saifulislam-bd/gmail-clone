import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    allEmail: [],
    selectedEmail: null,
    searchText: "",
    user: null,
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
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUser: (state, action) => {
      state.searchText = action.payload;
    },
  },
});
export const { setOpen, setEmails, setSelectedEmail, setSearchText, setUser } =
  appSlice.actions;
export default appSlice.reducer;
