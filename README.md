# Maths website

In this repo I will be using react to create a website in which I can write about maths!

## Table of contents:

    - Algebra
    - Geometry
    - Trigonometry
    - Linear algebra
    - Calculus

### Using maths in React

At the top of each file you require maths in write

```js react
var Latex = require("react-latex");
const someEquation = `$$ \\text{some equation} $$`
<Latex>{someEquation}</Latex>
```
