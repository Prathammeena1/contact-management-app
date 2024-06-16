import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load, addNewContact } from "../store/reducers/contactAction";

const AddContact = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [image, setimage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      name,
      email,
      number,
      image,
    };
    // console.log(obj)
    dispatch(addNewContact(obj));
  };

  return (
    <div className="bg-white rounded-lg w-full overflow-auto p-6 right">
      <div className="flex justify-between items-center mb-6 w-full px-1">
        <div className="logo text-3xl font-bold">ContactKeeper</div>
      </div>
      <div className="h-[75vh] w-full flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="col-span-1 min-w-[30vw] min-h-[25vw] flex flex-col items-center justify-center border-dashed border-2 border-gray-300 rounded-lg p-4"
        >
          <p className="text-xl font-semibold">Add New Member</p>
          <input
            required
            onChange={(e) => setimage(e.target.value)}
            name="image"
            type="url"
            placeholder="Image URL"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            onChange={(e) => setname(e.target.value)}
            name="name"
            type="text"
            placeholder="Addie Barton"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            onChange={(e) => setemail(e.target.value)}
            name="email"
            type="email"
            placeholder="addie.barton@gmail.com"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <input
            required
            onChange={(e) => setnumber(Number(e.target.value))}
            name="number"
            type="number"
            placeholder="9876543210"
            className="border rounded px-4 py-2 mt-2 w-full text-center"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
