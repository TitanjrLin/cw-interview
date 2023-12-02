import React from 'react';

const createLazyPage = (path) => React.lazy(() => import(`./${path}/index.jsx`));

export default {
  HOME: createLazyPage('Home'),
};
