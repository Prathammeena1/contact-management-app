import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const productSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    load: (state, action) => {
      state.contacts = JSON.parse(localStorage.getItem("contacts"));
    },
    setContact: (state, action) => {
      localStorage.setItem("contacts",JSON.stringify(action.payload));
      load();
    },
  },
});

export default productSlice.reducer;

export const { load,setContact } = productSlice.actions;
