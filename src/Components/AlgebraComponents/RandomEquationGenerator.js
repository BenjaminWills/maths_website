import React from "react";

export default function RandomEquationGenerator() {
  function generateEquation() {
    return Math.floor(Math.random() * 10);
  }
  return (
    <>
      <div>
        <h3>
          x - {generateEquation()}
          <button type="button" onClick={generateEquation}>
            generate equation
          </button>
        </h3>
      </div>
      <div>
        <input type="text" name="name" />
        <button type="button">submit answer</button>
      </div>
    </>
  );
}
