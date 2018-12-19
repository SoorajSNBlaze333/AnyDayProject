import React from 'react';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Home from './containers/Home';
import * as Layout from './layouts/index'
import Dashboard from './containers/Dashboard';


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Layout.NonPrivateRoute exact path="/" component={Home} />
              <Layout.PrivateRoute exact path="/dashboard" component={Dashboard}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;