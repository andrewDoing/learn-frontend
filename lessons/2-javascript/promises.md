# Promises

[Mozilla: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

[YouTube: JavaScript Promise in 100 Seconds](https://www.youtube.com/watch?v=RvYYCGs45L4&ab_channel=Fireship)

[Promise Basics](https://javascript.info/promise-basics)

## What are Promises?

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation.

## [Async/Await functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Async functions always return a Promise.

## Promise Chaining vs. Async/Await

Promise chaining. Example:

```javascript
function test() {
    return func1()
    .then(v1 => {
        return func2(v1);
    })
    .then(v2 => {
        return func3(v1, v2);
    });
}
```

Async/Await is syntactic sugar to simplify Promise chaining.
Example:

```javascript
async function test() {
    let v1 = await func1();
    let v2 = await func2(v1); 
    return await func3(v1, v2);  
}
```

## Promise.all()

How do you make multiple async requests, and then make sure all of them get resolved? Use Promise.all()

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

[Back to README...](README.md#promises)
