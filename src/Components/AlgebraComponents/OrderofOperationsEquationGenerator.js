import React from "react";
import { useState } from "react";
var Latex = require("react-latex");

export default function OrderofOperationsEquationGenerator() {
  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(9);
  const [number3, setNumber3] = useState(1);
  const original_equation = `$$ ${number3}x - ${number1} = ${number2} $$`;

  const [visible, setVisible] = useState(false);
  const step1 = `add ${number1} to both sides`;
  const verboseStep1 = `$$ ${number3}x = ${number1 + number2} $$`;
  const step2 = `divide both sides by ${number3}`;
  const verboseStep2 = `$$ x = \\frac{${number1 + number2}}{${number3}} $$`;

  function generateEquation() {
    setNumber1((prevNum) => Math.floor(Math.random() * 10));
    setNumber2((prevNum) => Math.floor(Math.random() * 10));
    setNumber3((prevNum) => Math.floor(Math.random() * 10));
  }

  function getSolution() {
    return (number1 + number2) / number3;
  }

  function showSolution() {
    alert(`x is: ${getSolution()}`);
  }

  function makeVisible() {
    setVisible((prev) => !prev);
  }

  return (
    <>
      <h3>
        <Latex>{original_equation}</Latex>
        <button type="button" onClick={generateEquation}>
          generate equation
        </button>
      </h3>
      <button type="button" onClick={showSolution}>
        what is x?
      </button>
      <br></br>
      <button type="button" onClick={makeVisible}>
        show steps
      </button>
      <div>
        {visible && (
          <div>
            <span>{step1}</span>
            <br></br>
            <Latex>{verboseStep1}</Latex>
            <br></br>
            <span>{step2}</span>
            <br></br>
            <Latex>{verboseStep2}</Latex>
          </div>
        )}
      </div>
    </>
  );
}
