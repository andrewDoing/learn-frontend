# React Hooks

## Understanding what a hook is

Hooks are powerful functions that allow React Functional Components to "hook" into the React lifecycle.

## Hooks in order of frequency of use

### 1. `useState`
This hook is the most frequently used. It lets you add state to function components. When state variables are updated, the component re-renders.

- Learn React: State: A Component's Memory: https://react.dev/learn/state-a-components-memory

- API Reference: https://react.dev/reference/react/useState

### 2. `useEffect`
Often the second most used, it lets you perform side effects in function components. It's a workhorse for data fetching, setting up subscriptions, and manually changing the DOM in React components.

- Learn React: Synchronizing with Effects: https://react.dev/learn/synchronizing-with-effects#fetching-data

- API Reference: https://react.dev/reference/react/useEffect

### 3. `useContext`
This hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to every level.

- Learn React: Passing Data Deeply with Context: https://react.dev/learn/passing-data-deeply-with-context

- API Reference: https://react.dev/reference/react/useContext#usecontext

### 4. `useReducer`
Less commonly used than `useState`, it's ideal for managing more complex state logic in components. It lets you manage the state of the component with a reducer function.

- Learn React: Extracting State Logic into a Reducer: https://react.dev/learn/extracting-state-logic-into-a-reducer#consolidate-state-logic-with-a-reducer

- API Reference: https://react.dev/reference/react/useReducer

### 5. `useRef`
Used for referencing elements and storing a mutable value that does not cause re-rendering when updated. It’s useful for keeping any mutable value around similar to how you’d use instance fields in classes.

- Learn React: Referencing Values with Refs: https://react.dev/learn/referencing-values-with-refs

- API Reference: https://react.dev/reference/react/useRef

### 6. `useMemo`
It memoizes a computed value so that it does not need to be re-computed on every render. This is useful for performance optimizations.

- API Reference: https://react.dev/reference/react/useMemo

### 7. `useCallback`
This hook returns a memoized callback function. It’s useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

- API Reference: https://react.dev/reference/react/useCallback

Custom Hooks
----
### 8. Bonus: `useCustomHook`
Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.

- Learn React: Reusing Logic with Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components


Less frequently used Hooks
----
### 9. `useLayoutEffect`
Similar to `useEffect`, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and re-render synchronously.

- API Reference: https://react.dev/reference/react/useLayoutEffect

### 10. `useImperativeHandle`
This hook is used with `forwardRef` to customize the instance value that is exposed to parent components when using refs.

- API Reference: https://react.dev/reference/react/useImperativeHandle

### 11. `useDebugValue`
It's not used as frequently as others. It can be used to display a label for custom hooks in React DevTools.

- API Reference: https://react.dev/reference/react/useDebugValue
