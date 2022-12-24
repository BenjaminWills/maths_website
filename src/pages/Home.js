import React from "react";
var Latex = require("react-latex");

export default function Home() {
  const fraction = `$$5 \\times 2 = 10$$`;
  return (
    <>
      <div>
        <h1 className="boldText"> Welcome to my maths website!</h1>
        <br />
      </div>
      <div id="textBox">
        <p>
          This is my maths website, in which I will be creating some cool ways
          to learn maths so that it doesn't come across as so daunting. I love
          it and with this website I hope that you will too. Maths is
          deceptively simple, you just need to learn it in a way that suits you.
        </p>
        <Latex>{fraction}</Latex>
      </div>
    </>
  );
}
