import React from 'react';
import { Route } from 'react-router-dom';
import PrivateAuthenticator from './PrivateAuthenticator';

export const PrivateRoute = ({ component : Component , ...rest }) => (
  <Route {...rest} render={props => (
    <PrivateAuthenticator>
      <Component {...props}/>
    </PrivateAuthenticator>
  )}/>
)