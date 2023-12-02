import React from 'react';
import { useRoutes } from 'react-router-dom';
import Routes from './routes';
import './plugins/AOS';
import './assets/css/base.scss';

const Router = () => useRoutes(Routes);

function App() {
  return (
    <React.Suspense
      fallback={<React.Fragment />}
    >
      <Router />
    </React.Suspense>
  );
}

export default App;
