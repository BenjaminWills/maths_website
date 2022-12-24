import React from "react";

export default function randomEquationGenerator() {
  function sayHello() {
    alert("You clicked me!");
  }
  return (
    <div>
      <button onClick={sayHello}>generate equation</button>
    </div>
  );
}
