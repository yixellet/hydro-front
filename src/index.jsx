import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import Api from './utils/Api';

import { BASE_URL } from './data/config';

const api = new Api(BASE_URL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App api={api} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
