import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Algebra from "./pages/Algebra";
import Geometry from "./pages/Geometry";
import Calculus from "./pages/Calculus";
import { Route, Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "todoApp.todos"; // storing the changes locally

function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>

      {/* <Route exact to="/" component={Home} />
      <Route exact to="/algebra" component={Algebra} />
      <Route exact to="/geometry" component={Geometry} />
      <Route exact to="/calculus" component={Calculus} /> */}
    </>
  );
}

export default App;
