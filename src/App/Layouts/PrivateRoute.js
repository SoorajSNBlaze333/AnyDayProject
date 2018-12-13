import React from 'react';
import { Route } from 'react-router-dom';
import Authentication from './Authentication';
import { Layout } from 'antd';
import HeaderComponent from '../Components/Header';

const { Content, Header } = Layout;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Authentication>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <HeaderComponent />
        </Header>
        <div>
          <Content>
            <Component {...props} />
          </Content>
        </div>
      </Layout>
    </Authentication>
  )} />
);
export default PrivateRoute;