import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../services/auth';
import PropTypes from 'prop-types';

const AuthRoute = ({ component: Component, ...rest }) => {
  const AuthComponent = (props) => {
    if (auth.isUserLoggedIn()) {
      return <Component {...props} />;
    } else {
      return <Redirect to={'/login'} />;
    }
  };

  return <Route {...rest} component={AuthComponent} />;
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default AuthRoute;
