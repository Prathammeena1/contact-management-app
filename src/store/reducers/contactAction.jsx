import { load, setContact } from "../slice/contactSlice";

export {load} from "../slice/contactSlice";


export const addNewContact = (obj)=> (dispatch,getState)=>{
    const state = getState().contactSlice
    dispatch(setContact(obj));    
    dispatch(load())
}