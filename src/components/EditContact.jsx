import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load, editContact } from "../store/reducers/contactAction";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const dispatch = useDispatch();

  const {id} = useParams()
  const {contacts} = useSelector(state=>state.contactSlice)
  const currentContact = contacts.find(contact => contact.id == id)

  const [name, setname] = useState(currentContact.name);
  const [email, setemail] = useState(currentContact.email);
  const [number, setnumber] = useState(currentContact.number);
  const [image, setimage] = useState(currentContact.image);
  
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
        name,
        email,
        number,
        image,
        id,
    }
    dispatch(editContact(id,obj))
    navigate('/')
  };

  return (
    <div className="bg-zinc-900 rounded-lg w-full overflow-auto p-6 right">
      <div className="flex justify-between items-center mb-6 w-full px-1">
        <div className="logo text-3xl font-bold">ContactKeeper</div>
      </div>
      <div className="h-[75vh] w-full flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="col-span-1 min-w-[30vw] min-h-[25vw] flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4"
        >
          <p className="text-xl font-semibold">Edit Contact</p>
          <input
            required
            value={image}
            onChange={(e) => setimage(e.target.value)}
            name="image"
            type="url"
            placeholder="Image URL"
            className=" bg-transparent border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
            name="name"
            type="text"
            placeholder="Addie Barton"
            className=" bg-transparent border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            name="email"
            type="email"
            placeholder="addie.barton@gmail.com"
            className=" bg-transparent border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            value={number}
            onChange={(e) => setnumber(Number(e.target.value))}
            name="number"
            type="number"
            placeholder="9876543210"
            className=" bg-transparent border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
