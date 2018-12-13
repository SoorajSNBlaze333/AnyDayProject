import React from 'react';
import { Route } from 'react-router-dom';
import Authenticator from '../Layouts/Authenticator';
import { Layout } from 'antd';
import Home from '../Containers/Home'

const NonPrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    // <Authentication reverse={true}>
    // <Layout style={{ minHeight: '100vh' }}>
    // <div></div>
    // <Main />
    <Component {...props} />
    // </div>
    // </Layout>
    // </Authentication>
  )} />
);
export default NonPrivateRoute;