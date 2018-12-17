import React from 'react';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Home from './containers/Home';


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/login" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;