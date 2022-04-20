# Looping

## For Loop

Example:

```javascript
for (let i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```

## While Loop

Example:

```javascript
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

## [Array.prototype.map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

### When not to use map()

Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use `forEach` or `for...of` instead.

You shouldn't be using map if:

- you're not using the array it returns; and/or
- you're not returning a value from the callback.

[Back to README...](README.md#looping)
