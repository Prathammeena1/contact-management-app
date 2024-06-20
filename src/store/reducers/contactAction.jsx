import { load, setContact } from "../slice/contactSlice";

export {load} from "../slice/contactSlice";


export const addNewContact = (obj)=> (dispatch,getState)=>{
    const {value} = getState().contactSlice
    dispatch(setContact([...value,obj]));    
    dispatch(load())
}

export const deleteContact = (id)=> (dispatch,getState)=>{
    const {value} = getState().contactSlice
    const deletedContacts = value.filter(contact => contact.id !== id)
    dispatch(setContact(deletedContacts));    
    dispatch(load())
}

export const editContact = (id,obj)=> (dispatch,getState)=>{
    const {value} = getState().contactSlice
    const copyValue = [...value]
    const index = copyValue.findIndex(item => item.id === id);
    copyValue[index] = obj
    dispatch(setContact(copyValue));    
    dispatch(load())
    
}