import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Attenzione a non mettere il ; alla fine del parametri passato alla render
ReactDOM.render(
  <App />,
  // l'id del mio div
  document.getElementById('app')
);
