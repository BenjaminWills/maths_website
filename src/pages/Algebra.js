import React from "react";
import randomEquationGenerator from "../Components/algebra_components/randomEquationGenerator";
var Latex = require("react-latex");

export default function Algebra() {
  const intro_example = `$$\\ [ \\ ] - 2 = 4$$`;
  const first_intro_algebra_step_1 = `$$x-2=4$$`;
  const first_intro_algebra_step_2 = `$$x-2+2=4+2$$`;
  const first_intro_algebra_step_3 = `$$x+0=6$$`;
  const first_intro_algebra_step_4 = `$$x=6$$`;
  const first_order_of_operations_step_1 = `$$7 + 3 \\ / \\ 3 + 4$$`;
  const first_order_of_operations_step_2 = `$$\\rightarrow 7 + 1 + 4$$`;
  const first_order_of_operations_step_3 = `$$\\rightarrow 12$$`;
  const second_order_of_operations_step_1 = `$$7+\\frac{3}{3}+4$$`;
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
          <br></br>
          <randomEquationGenerator />
          <h2>Order of operations</h2>
          <p>
            What you will learn whilst reading through this website - which I
            hope you will - is that I HATE the ÷ symbol. All it causes is chaos
            and confusion, it is possibly the worst thing in all of maths. Thus
            we will exclusively be using fractions. Some of you may be thinking:
            this is a bit dramatic isn't it? Well read this:
          </p>
          <div className="center">
            <Latex>{first_order_of_operations_step_1}</Latex>
          </div>
          <p>
            Riddle me this: what is the order of operations here?! do we add
            first and then divide, do we divide first and then add. As I sit
            here shaking from rage, I value my ability to choose not to use
            these demonic symbols. There are two solutions to this problem.
          </p>
          <div className="center">
            <li>BIDMAS</li>
            <li>Fractions</li>
          </div>
          <br></br>
          <p>
            BIDMAS stands for brackets, indices, division, multiplication,
            addition, subtraction, this is the order of operations that we use
            to wrangle the beast that is the division symbol. So we can solve
            our problem above:
          </p>
          <div className="center">
            <Latex>{first_order_of_operations_step_1}</Latex>
            <br></br>
            <Latex>{first_order_of_operations_step_2}</Latex>
            <br></br>
            <Latex>{first_order_of_operations_step_3}</Latex>
          </div>
          <p>
            {" "}
            To summarise, we see that we need to divide first, so we divide 3 by
            3 to get 1. Then we add, and bosh - the equation is defeated. Now
            for the superior option, we have fractions. Watch how simple this
            becomes
          </p>
          <div className="center">
            <Latex>{second_order_of_operations_step_1}</Latex>
            <br></br>
            <Latex>{first_order_of_operations_step_2}</Latex>
            <br></br>
            <Latex>{first_order_of_operations_step_3}</Latex>
          </div>
          <p>See! No BIDMAS required.</p>
        </div>
      </div>
    </>
  );
}
