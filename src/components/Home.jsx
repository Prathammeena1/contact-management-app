import React, { useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, load } from "../store/reducers/contactAction";
import { Link } from "react-router-dom";

const Home =  () => {
  
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactSlice.value);

  useEffect(() => {
    dispatch(load());
  }, [false]);


  const deleteContactHandler = (id)=>{
    dispatch(deleteContact(id))
  }


  return (
      <div className="bg-white rounded-lg w-full overflow-auto p-6 right">
        <div className="flex justify-between items-center mb-6 w-full px-1">
          <div className="logo text-3xl font-bold">ContactKeeper</div>
          <div className="w-[40%] flex gap-2">
          <div className=" border-b border-zinc-400 w-[90%] px-1 flex gap-2">
            <input
              className=" focus:outline-none focus:border-none mb-1 w-full"
              placeholder="Search your contacts"
            />
            <i className="ri-search-2-line"></i>

          </div>
          <select name="type" className="px-2">
          <option value="allContacts">All Contacts</option>
          <option value="favorites">Favorites</option>
          <option value="recentlyAdded">Recently Added</option>
        </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          { contacts ? contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={contact.image}
                alt="Member"
                className="rounded-full mb-4 w-24 h-24"
              />
              <p className="text-xl font-semibold text-[1.7vw]"> {contact.name}</p>
              <p className="text-gray-500 text-[1vw]">{contact.email}</p>
              <p className="text-gray-500 text-[1vw]">{contact.number}</p>
              <div className="flex mt-4 space-x-2">
                <Link to={`/editContact/${contact.id}`}><Button style="border" text='edit' /></Link>
                <div onClick={()=> deleteContactHandler(contact.id)}><Button style="fill" text='delete' /></div>
              </div>
            </div>
          )) : <h1>No Contacts Yet!</h1>}
        </div>
      </div>
  );
};

export default Home;
