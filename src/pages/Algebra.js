import React from "react";
var Latex = require("react-latex");

export default function Algebra() {
  const intro_example = `$$\\ [ \\ ] - 2 = 4$$`;
  const first_intro_algebra_step_1 = `$$x-2=4$$`;
  const first_intro_algebra_step_2 = `$$x-2+2=4+2$$`;
  const first_intro_algebra_step_3 = `$$x+0=6$$`;
  const first_intro_algebra_step_4 = `$$x=6$$`;
  return (
    <>
      <div>
        <h1> ALEGBRA</h1>
        <div id="textBox">
          <p>
            Welcome to the wonderfully wacky world of algebra! This is the first
            fundamental building block of maths. It may seem boring - but it is
            essential for us to get to the cool stuff!
          </p>
        </div>
        <br></br>
        <div id="textBox">
          <h1>The Basics</h1>
          <h2>Introduction to Algebra</h2>
          <p>
            You may find your self wondering: what is the point of algebra? We
            learn it in schools and never use it again! While in some peoples
            case this is true, we can make our life easier using algebra.
            Further, it is the basis of all of maths! We can use it to solve so
            many complex problems that we could not solve otherwise, such as the
            orbit of planets around planets, or the computer screen you're
            reading this on now. So lets jump in, consider the following
            problem:
          </p>
          <br></br>
          <div className="center">
            <Latex>{intro_example}</Latex>
          </div>
          <br></br>
          <p>
            Wouldn't it be convinient to have some tools to solve this equation?
            Spoilers: the anser is YES. Our magical tool is called Algebra, in
            which we use letters such as x to represent numbers that are
            unknown! This is a very powerful concept that allows us to solve
            much more interesting and complex problems. So lets use algebra to
            solve this problem! First we'll replace [ ] with x; our unknown.
          </p>
          <br></br>
          <div className="center">
            <Latex>{first_intro_algebra_step_1}</Latex>
          </div>
          <p>
            We can then just add two to both sides of this equation to get:{" "}
          </p>
          <br></br>
          <div className="center">
            <Latex>{first_intro_algebra_step_2}</Latex>
            <br></br>
            <Latex>{first_intro_algebra_step_3}</Latex>
            <br></br>
            <Latex>{first_intro_algebra_step_4}</Latex>
          </div>
          <p>
            So there we have it! Our first algebra problem has been solved! The
            unknown variable had a value of 6. It is important to mention that
            the most important part of algebra is{" "}
            <strong>
              balance; what you do to one side of an equation you must do to the
              other.
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
