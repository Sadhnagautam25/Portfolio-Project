import { createSlice } from "@reduxjs/toolkit";
import { List } from "lucide-react";

const initialState = {
  list: [
    { id: "github", isOpen: false },
    { id: "resume", isOpen: false }, 
    { id: "spotify", isOpen: false },
    { id: "instagram", isOpen: false }, 
    { id: "linkedin", isOpen: false },
    { id: "calendar", isOpen: false },
    { id: "note", isOpen: false },
    { id: "terminal", isOpen: false },


  ],
};

const tabSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    openTab: (state, action) => {
      const win = state.list.find((w) => w.id === action.payload);
      if (win) win.isOpen = true;
    },

    closeTab: (state, action) => {
      const win = state.list.find((w) => w.id === action.payload);
      if (win) win.isOpen = false;
    },
  },
});

export const { openTab, closeTab } = tabSlice.actions;
export default tabSlice.reducer;
