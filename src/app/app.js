import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../components/auth-route';
import loadable from '@loadable/component';

const loadPage = (path) =>
  loadable(() => import(/* webpackPrefetch: true */ `../pages/${path}`), {
    fallback: <p>Loading...</p>
  });

const App = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute path={'/'} exact component={loadPage('home')} />
      <Route path={'/login'} exact component={loadPage('login')} />
    </Switch>
  </BrowserRouter>
);

export default App;
