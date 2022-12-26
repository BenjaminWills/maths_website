import React, { useState } from "react";

export default function RandomEquationGenerator() {
  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(9);

  function generateEquation() {
    setNumber1((prevNum) => Math.floor(Math.random() * 10));
    setNumber2((prevNum) => Math.floor(Math.random() * 10));
  }

  function getSolution() {
    return number1 + number2;
  }

  function showSolution() {
    alert(`x is: ${getSolution()}`);
  }

  return (
    <>
      <div>
        <h3>
          x - {number1} = {number2} {`\t \t \t `}
          <button type="button" onClick={generateEquation}>
            generate equation
          </button>
        </h3>
      </div>
      <button type="button" onClick={showSolution}>
        <span>What is x? {`\t`}</span>
      </button>
    </>
  );
}
