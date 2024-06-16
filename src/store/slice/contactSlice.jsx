import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { json } from 'react-router-dom';

const initialState = {
  value: JSON.parse(localStorage.getItem('contacts')) || [],
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    load: (state,action)=>{
        state.value = JSON.parse(localStorage.getItem('contacts')) || [];
    },
    setContact: (state, action) => {
      localStorage.setItem('contacts', JSON.stringify([...state.value, action.payload]));
      console.log(state.value);
    }
  },
})


export default contactSlice.reducer
export const {load,setContact} = contactSlice.actions