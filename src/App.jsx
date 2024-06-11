import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MainRouter from "./Routing/MainRouter";

const App = () => {
  return (
    <>
    <div className="min-h-screen h-screen bg-gray-100 flex  p-6 flex-col items-center">
      <div className="w-full h-screen flex gap-3 overflow-hidden">
        <Nav />
    <MainRouter/>
      </div>
    </div>
    </>
  );
};

export default App;
