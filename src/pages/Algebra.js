import React from "react";
import RandomEquationGenerator from "../Components/AlgebraComponents/RandomEquationGenerator";
import OrderofOperationsEquationGenerator from "../Components/AlgebraComponents/OrderofOperationsEquationGenerator";
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
  const inequalityStep1 = `$$x + 3 > 2x$$`;
  const inequalityStep2 = `$$3 > x$$`;
  const appleInequality = `$$ 0.1x > 0.06x + 0.45 $$`;
  const coefficientExample = `$$ \\red{12} \\blue{x} \\orange{-} \\green{4} = \\green{7} $$`;
  const exponentExample1 = `$$ 2^4 = 2 * 2 * 2 * 2 = 16 $$`;
  const exponentExample2 = `$$ x^{3} = x * x * x $$`;
  const exponentExample3 = `$$ (x^2y)^3 = x^2y * x^2y * x^2y = x^6y^3 $$`;
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
          <div className="center">
            <RandomEquationGenerator />
          </div>
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
          <div className="center">
            <OrderofOperationsEquationGenerator />
          </div>
          <h2>Inequalities</h2>
          <p>
            Another very useful algebraic tool is the inequality. These allow us
            to express a whole set of numbers, for example: having more than 6
            apples translates to x > 6, where x is the number of apples. This
            becomes very powerful in applications of maths. For now we will
            consider some number problems to have a soft introduction to
            Inequalities. For example: which number when you add three to it is
            always greater than that number multiplied by 2?
          </p>
          <div className="center">
            <Latex>{inequalityStep1}</Latex>
            <br></br>
            <span>minus x from both sides</span>
            <br></br>
            <Latex>{inequalityStep2}</Latex>
          </div>
          <p>
            So we can see that if x is less than 3, the original inequality
            holds. This has many cool applications in constrained optimisation
            problems! Think about if your business sells apples which cost 6
            pence to pick and 45 p to take to market, and you sell them for 10
            pence each, we can formulate it as the following ineqality, where x
            is the number of apples we need to sell to make a profit:
          </p>
          <div className="center">
            <Latex>{appleInequality}</Latex>
          </div>
          <h2>Algebra Jargon</h2>
          <h3>Parts of an equation</h3>
          <p>
            When writing an equation its important that we can refer to specific
            parts of it to save time, so below I have highlighted some elements:
          </p>
          <div className="center">
            <Latex>{coefficientExample}</Latex>
          </div>
          <p>
            So here the red number is the coefficient of x. In blue we have x,
            the variable. In orange we have the operator - the minus sign in
            this case. Finally in green we have constants, these are called
            constants as they are known numbers, as opposed to x which is
            unknown.
          </p>
          <h3>Exponents</h3>
          <p>
            An exponent represents the number of repeated multiplications of the
            same number. It easiest to show with an example.
          </p>
          <div className="center">
            <Latex>{exponentExample1}</Latex>
            <br></br>
            <Latex>{exponentExample2}</Latex>
            <br></br>
            <Latex>{exponentExample3}</Latex>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
