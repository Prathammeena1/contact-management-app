import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, load } from "../store/reducers/contactAction";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector((state) => state.contactSlice);

  const searchHandler = (e) => {};

  useEffect(() => {
    dispatch(load());
  }, []);
  console.log(contacts);

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="bg-zinc-900 rounded-lg w-full h-full overflow-y-auto overflow-x-hidden p-6 right">
      <div className="flex justify-between flex-col md:flex-row md:items-center mb-6 w-full px-1">
        <div className="logo md:text-3xl text-sm font-bold flex gap-2 items-center ">
          {" "}
          <img className="h-8" src="/svg/logo.svg" alt="" /> Contact Keeper
        </div>
        <div className="md:w-[40%] flex gap-4 mt-4 md:mt-0 md:gap-2 flex-col  md:flex-row">
          <div className=" border-b border-zinc-400 w-[90%] px-1 flex gap-2 overflow-hidden">
            <input
              onChange={(e) => searchHandler(e)}
              // value=
              className=" focus:outline-none focus:border-none mb-1 w-full bg-transparent"
              placeholder="Search your contacts"
            />
            <i className="ri-search-2-line"></i>
          </div>
          <select name="type" className="md:px-2  bg-transparent">
            <option className="bg-transparent" value="value">
              All Contacts
            </option>
            <option className="bg-transparent" value="favorites">
              Favorites
            </option>
            <option className="bg-transparent" value="recentlyAdded">
              Recently Added
            </option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6  ">
        {contacts ? (
          contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={contact.image}
                  alt="Member"
                  className="rounded-full mb-4 w-24 h-24 object-cover"
                />
                <p className="text-xl font-semibold text-[1.7vw]">
                  {" "}
                  {contact.name}
                </p>
                <p className="text-gray-500 text-xs md:text-[1vw]">{contact.email}</p>
                <p className="text-gray-300 text-xs md:text-[1vw] mt-2">{contact.number}</p>
                <div className="flex mt-4 space-x-2">
                  <Link to={`/editContact/${contact.id}`}>
                    <Button style="border" text="edit" />
                  </Link>
                  <div onClick={() => deleteContactHandler(contact.id)}>
                    <Button style="fill" text="delete" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-white">Loading....</h1>
          )
        ) : (
          <h1>No contact found!</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
