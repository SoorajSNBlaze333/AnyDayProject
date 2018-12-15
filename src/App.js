import React from 'react';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Main from './containers/Main';


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Main}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;