import React from 'react';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import * as Layout from './layouts/index'
import * as Container from './containers/index';


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Layout.NonPrivateRoute exact path="/" component={Container.Login} />
              <Layout.PrivateRoute exact path="/dashboard" component={Container.Dashboard}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
