import React, { useState } from "react";

export default function RandomEquationGenerator() {
  const [number, setNumber] = useState(5);

  function generateEquation() {
    setNumber((prevNum) => Math.floor(Math.random() * 10));
  }

  function isCorrectAnswer(submission) {
    if (submission === number) {
      return true;
    }
    return false;
  }

  return (
    <>
      <div>
        <h3>
          x - {number}
          <button type="button" onClick={generateEquation}>
            generate equation
          </button>
        </h3>
      </div>
      <div>
        <input type="text" name="name" />
        <button type="button" onClick={isCorrectAnswer}>
          submit answer
        </button>
      </div>
    </>
  );
}
