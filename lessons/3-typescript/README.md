# Lesson 3: TypeScript

<https://www.typescriptlang.org/>

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## [TypeScript Tooling in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

1. TypeScript files end in `.ts` or if they contain JSX, `.tsx`.

2. Type Annotations. How to define the contract types of a function: parameter types and return types. [Type Cheat Sheet](https://www.typescriptlang.org/static/TypeScript%20Types-4cbf7b9d45dc0ec8d18c6c7a0c516114.png)

3. Interfaces]. In typescript, we can define new, complex data types using interfaces. [Interfaces Cheat Sheet](https://www.typescriptlang.org/static/TypeScript%20Interfaces-34f1ad12132fb463bd1dfe5b85c5b2e6.png)

4. Classes. When we'd like to add some methods to a data structure, it's time to create a class. We can add methods like constructors, etc. [Classes Cheat Sheet](https://www.typescriptlang.org/static/TypeScript%20Classes-83cc6f8e42ba2002d5e2c04221fa78f9.png)

5. Control Flow Analysis. Checking the type of a primitive, whether a property is in an object, whether an object is an instance of a class, etc. [Control Flow Cheat Sheet](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)

## Strict Usage

An enforced setting will be TypeScripts `strict` mode.

This will ensure we gain all the value from strict typing from the beginning of the project.

[How strict is TypeScript's strict mode?](https://dev.to/briwa/how-strict-is-typescript-s-strict-mode-311a#:~:text=%20How%20strict%20is%20Typescript%27s%20strict%20mode%3F%20,possibility%20of%20values%20returning%20null%20or...%20More%20)

## Basic usage scenario

Some data will come in from an API call, or will otherwise be created by a developer, and that data requires at least an interface that defines the properties of the object.

Whenever that object gets passed to a function, use the interface name as a type.

## TypeScript has many more features

These are just the basics to get you working. TypeScript has a lot more features, akin to languages like C#. You can learn more by reading the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html).
