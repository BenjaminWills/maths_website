import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Route, Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todoApp.todos"; // storing the changes locally

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </>
  );
}

export default App;
