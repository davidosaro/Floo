import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/reset.css';

//pages
import Splash from './components/splash';
import Landing from './pages/landing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Splash /> */}
    <Landing />
  </React.StrictMode>
);