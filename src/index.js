import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dogs from './Dogs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <Dogs />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
