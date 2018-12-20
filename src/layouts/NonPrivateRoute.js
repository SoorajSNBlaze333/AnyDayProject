import React from 'react';
import { Route } from 'react-router-dom';
import NonPrivateAuthenticator from './NonPrivateAuthenticator';

export const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <NonPrivateAuthenticator>
      <Component {...props} />
    </NonPrivateAuthenticator>
  )} />
)