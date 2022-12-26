import React, { useState } from "react";
var Latex = require("react-latex");

export default function RandomEquationGenerator() {
  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(9);
  const original_equation = `$$ x - ${number1} = ${number2} $$`;

  const [visible, setVisible] = useState(false);
  const step1 = `add ${number1} to both sides`;
  const verboseStep1 = `$$ x = ${number1 + number2} $$`;

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

  function makeVisible() {
    setVisible((prev) => !prev);
  }

  return (
    <>
      <div>
        <h3>
          <Latex>{original_equation}</Latex>
          <button type="button" onClick={generateEquation}>
            generate equation
          </button>
        </h3>
      </div>
      <button type="button" onClick={showSolution}>
        <span>What is x? {`\t`}</span>
      </button>
      <button type="button" onClick={makeVisible}>
        show steps
      </button>
      <div>
        {visible && (
          <div>
            <Latex>{original_equation}</Latex>
            <br></br>
            <span>{step1}</span>
            <br></br>
            <Latex>{verboseStep1}</Latex>
          </div>
        )}
      </div>
    </>
  );
}
