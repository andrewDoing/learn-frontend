# Functions

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>

There are multiple ways to write functions in JavaScript, and the differences are more than just syntax.

### Function declarations

- Parameters are passed by value, however if an object is passed and its properties are modified, that change will persist outside of the function.

**Use when:** You want a function that you'll call by name. Sometimes you'll want to use the other options, depending on the use case.

```javascript
function square(number) {
    return number * number
}
```

### Function expressions

- Doesn't work with function hoisting. Must be expressed before being called.

**Use when:** You want to define a function that will be passed as an argument to another function

```javascript
// Anonymous function expression
const square = function(number) {
    return number * number
}
```

### Arrow function expressions

- Arrow functions don't have its own `this`, `arguments`, `super`, or `new.target`.

**Use when:** you'd prefer a shorter syntax and you don't want to bind `this`.

```javascript
const square = (number) => {
    return number * number;
}
// Anonymous
(number) => {return number * number};

// Shorter, useful for inline function arguments
number => number * number;
```

[Back to README...](README.md#functions)
