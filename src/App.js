import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export default App;
