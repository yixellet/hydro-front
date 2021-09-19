import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import gaugeList from './data/gaugeList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App gaugeList={gaugeList} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
