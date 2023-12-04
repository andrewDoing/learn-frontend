# Creating a Simple Todo Add in React

## Getting started
The official React Learn site has a great tutorial for getting started with React. It's recommended to follow this tutorial to get started with React.

Learn React Docs: https://react.dev/learn

## Tutorial: Writing a Simple Todo App

Mozilla's Tutorial: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

## Basic React Concepts

### React Lifecycle

In React, the overall goal is to create a user interface that is reactive to changes in state. This is done by creating a virtual DOM (document object model), which is a representation of the actual DOM. When the state changes, the virtual DOM is updated, and React will compare the virtual DOM to the actual DOM, and only update the parts of the DOM that have changed.

Learn React: Render and Commit: https://react.dev/learn/render-and-commit

Learn React: State as a Snapshot: https://react.dev/learn/state-as-a-snapshot

Learn React: Lifecycle of Reactive Effects: https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect

### JSX

JSX is a syntax extension to JavaScript that lets you write HTML-like markup inside a Javascript file. JSX produces React “elements”.

Learn React: Writing Markup with JSX: https://react.dev/learn/writing-markup-with-jsx

### Props (Properties)

Props are the way that data is passed into React components. Props are passed into components, and are accessed in the component as a parameter to the function. If a prop changes, the component will automatically re-render.



### Testing
[Read more about Testing](./testing.md)

### FAQs

#### Why do my components render twice?

React renders components twice in development mode to detect side effects. This is not a problem in production mode.

## Advanced React Concepts

For further learning, I recommend the following resources.

- [patterns.dev - Collection of WebApp Patterns](https://www.patterns.dev)
- [Tao of React - Opinionated Best Practices](https://alexkondov.com/tao-of-react/)