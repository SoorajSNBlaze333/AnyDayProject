import React from 'react';
import { Route } from 'react-router-dom';
import Authenticator from './Authenticator';

export const PrivateRoute = ({ component : Component , ...rest }) => (
  <Route {...rest} render={props => (
    <Authenticator>
      <Component {...props}/>
    </Authenticator>
  )}/>
)