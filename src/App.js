import React from 'react';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import * as Layout from './layouts/index'
import * as Container from './containers/index';
import * as Component from './components/index';


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Layout.NonPrivateRoute exact path="/" component={Container.Login} />
              <Layout.PrivateRoute exact path="/dashboard" component={Container.Dashboard} />
              <Layout.PrivateRoute exact path="/leaveform" component={Component.LeaveForm} />
              <Layout.PrivateRoute exact path="/ideapad" component={Component.IdeaPad} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
