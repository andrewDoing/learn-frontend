# Data Structures

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures>

## Dynamic Typing

JavaScript is loosely typed, and dynamic. The following is possible, but ill-advised.

```javascript
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

**Note**: TypeSript solves this problem by adding strong typing.

## JavaScript Variables
[Mozilla Docs: `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

[Mozilla Docs: `var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

[Mozilla Docs: `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

You declare variables in JavaScript with `let`, `var`, and `const`.

```javascript
let x = "x";
var y = "y";
const z = "z";
```

`let` and `var` are similar, but have key differences.

### Scoping rules

`let` variables are scoped to the block it is declared in.

`var` variables are scoped globally, or if declared in a function, globally within that function.

```javascript
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

At the top level of programs and functions, `let`, unlike `var`, does not create a property on the global object. For example:

```javascript
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
```

## JavaScript Types

- Primitives
  - Boolean
  - Null
  - Undefined
  - Number
  - BigInt
  - String
  - Symbol
- Objects

## Notable Objects

- Arrays and typed Arrays
- Maps, WeakMaps
- Sets, WeakSets
- Date
- Error
- RegExp
- Promise
- Generator
- WebAssembly

All Standard Objects <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects>

[Back to README...](README.md#data-structures)
