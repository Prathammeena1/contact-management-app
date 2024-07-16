import React from "react";
import Nav from "./components/Nav";
import MainRouter from "./Routing/MainRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className="min-h-screen h-screen bg-zinc-800 text-zinc-200 flex  p-6 flex-col items-center">
        <div className="w-full h-screen flex gap-3 overflow-hidden flex-col md:flex-row">
          <Nav />
          <MainRouter />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default App;
