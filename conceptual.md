### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
use callback function or Promise object or async/await functions 

- What is a Promise?
A promise is one-time guarantee of future value

- What are the differences between an async function and a regular function?
an async function always returns promises, regular function return a return statement or undefined;

an async function can use await keyword to pause the function's execution until a promise resolves, a regular function runs base on code order.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that runs javascript on the server side
Express.js is a web framework built on top of Node.js.

- What is the error-first callback pattern?
the callback function's first parameter should be listed as error. Node will supply an error object(if something bad happened), otherwise null as arguments

- What is middleware?
it's code that runs in the middle of request / response cycle!
in Express, middleware are functions that get access to the req and res objects and can also call the next function

- What does the `next` function do?
to tell express to move on to the next thing
if argument is passed to next, express always treats this as an error.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = $.getJSON('https://api.github.com/users/elie');
  const joel = $.getJSON('https://api.github.com/users/joelburton');
  const matt = $.getJSON('https://api.github.com/users/mmmaaatttttt');

  let e = await elie;
  let j = await joel;
  let m = await matt;

  return [e,j,m];
}
```
