import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_FOUND: 312,
  LOCATIONS: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
};


ReactDOM.render(
  <React.StrictMode>
    <App
      placesFound={Setting.PLACES_FOUND}
      locations={Setting.LOCATIONS}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
