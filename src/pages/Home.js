import React from "react";
var Latex = require("react-latex");

export default function Home() {
  const fraction = `$$\\frac{1}{2}$$`;
  return (
    <>
      <div>
        <h1 className="boldText"> Welcome to my maths website!</h1>
        <br />
      </div>
      <div id="textBox">
        This is my maths website, in which I will be creating some cool ways to
        learn maths so that it doesn't come across as so tedious. I love it and
        with this website I hope that you will too.
      </div>
      <Latex>{fraction}</Latex>
    </>
  );
}
