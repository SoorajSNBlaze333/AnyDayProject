import React from 'react';
import { Route } from 'react-router-dom';
import { Authenticator } from './Authenticator';

const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Authenticator reverse={true}>
      <Component {...props} />
    </Authenticator>
  )} />
);
export default NonPrivateRoute;