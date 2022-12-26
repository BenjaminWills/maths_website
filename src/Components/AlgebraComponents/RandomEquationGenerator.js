import React from "react";

export default function RandomEquationGenerator() {
  function sayHello() {
    alert("You clicked me!");
  }
  return (
    <div>
      <button type="button" onClick={sayHello}>
        generate equation
      </button>
    </div>
  );
}
