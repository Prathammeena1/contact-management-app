import React from "react";
import {  Route, Routes } from "react-router-dom";
import AddContact from "../components/AddContact";
import Home from "../components/Home";
import MyProfile from "../components/MyProfile";
import PageNotFound from "../components/PageNotFound";

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/myProfile" element={<MyProfile />} />


        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default MainRouter;
