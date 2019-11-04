import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthRoute from '../../components/auth-route';
import HomePage from '../home';
import LoginPage from '../login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute path={'/'} exact component={HomePage} />
      <Route path={'/login'} exact component={LoginPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
