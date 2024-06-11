import React from "react";
import {  Route, Routes } from "react-router-dom";
import AddContact from "../components/AddContact";
import Home from "../components/Home";

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddContact />} />
      </Routes>
  );
};

export default MainRouter;
