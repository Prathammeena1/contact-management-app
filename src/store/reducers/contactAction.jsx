import { load, setContact } from "../slice/contactSlice";
import {toast} from 'react-toastify'
export {load} from "../slice/contactSlice";


export const addNewContact = (obj)=> (dispatch,getState)=>{
    const {contacts} = getState().contactSlice
    const copyValue = [...contacts]
    if(contacts == null){
        dispatch(setContact([obj]));    
    }else{
        dispatch(setContact([...copyValue,obj]));    
    }
    dispatch(load())
    toast.success('Contact Added Successfully!',{
        theme:'dark'
    });
}

export const deleteContact = (id)=> (dispatch,getState)=>{
    const {contacts} = getState().contactSlice
    const deletedContacts = contacts.filter(contact => contact.id !== id)
    if(contacts.length == 1){
        dispatch(setContact(null));
    }else{
        dispatch(setContact(deletedContacts));    
    }
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