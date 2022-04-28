# Next.JS

<https://nextjs.org>

Next.js is the React Framework for Production ready websites.

## Why care about Next.js?

- Performance. <https://blog.logrocket.com/next-js-vs-create-react-app/>

- Built-in features.
  - Code-Splitting
  - File-system based Routing
  - Server-Side Rendering (SSR)
  - Fast Development Experience

## Documentation

[Getting Started](https://nextjs.org/docs/getting-started)

## Summary Documentation

I tried to extract the features that are most useful for starting in a next.js environment, and link them here.

|Basic Features |Comment  |
--- | --- |
|[Pages](https://nextjs.org/docs/basic-features/pages)| Pages are the basic unit of a UI in NextJS, they're one exported React Component.|
|[Data Fetching Overview](https://nextjs.org/docs/basic-features/data-fetching/overview)| Data Fetching occurs on a per page basis.|
|[getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)| getServerSideProps implements SSR, and pulls data at time of request.|
|[Built-in CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support)| Global CSS needs to be imported into the `pages/_app.ts` file.|
|[Layouts: Common components across Pages](https://nextjs.org/docs/basic-features/layouts)| For example, you may want a common Navbar to display on all pages.|
|[Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)| Useful for configuration, sending variables to the browser, and more.|

|Advanced Features |Comment  |
--- | --- |
|[Routing](https://nextjs.org/docs/routing/introduction)| Next.js has a file-system based router built on the concept of pages.|
|[Going to Production](https://nextjs.org/docs/going-to-production)| Production Recommendations from the Next.js team|
|[Authentication](https://nextjs.org/docs/authentication)| |
|[Testing](https://nextjs.org/docs/testing)||
