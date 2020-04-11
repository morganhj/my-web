// app/javascript/chat/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';
import App from './components/app';

const webpage = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  webpage
);

