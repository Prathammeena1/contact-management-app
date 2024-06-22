import { load, setContact } from "../slice/contactSlice";
import {toast} from 'react-toastify'
export {load} from "../slice/contactSlice";


export const addNewContact = (obj)=> (dispatch,getState)=>{
    const {contacts} = getState().contactSlice
    console.log(obj)
    dispatch(setContact([...contacts,obj]));    
    dispatch(load())
    toast.success('Contact Added Successfully!',{
        theme:'dark'
    });
}

export const deleteContact = (id)=> (dispatch,getState)=>{
    const {value} = getState().contactSlice
    const deletedContacts = value.filter(contact => contact.id !== id)
    dispatch(setContact(deletedContacts));    
    dispatch(load())
    toast.success('Contact Deleted Successfully!',{
        theme:'dark'
    });
}

export const editContact = (id,obj)=> (dispatch,getState)=>{
    const {contacts} = getState().contactSlice
    const copyValue = [...contacts]
    const index = copyValue.findIndex(item => item.id === id);
    copyValue[index] = obj
    dispatch(setContact(copyValue));    
    dispatch(load())
    toast.success('Contact Updated Successfully!',{
        theme:'dark'
    });
}