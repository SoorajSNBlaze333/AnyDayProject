import React from 'react';
import { combineReducers, createStore } from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Container from './App/Containers/index';
import * as Layout from './App/Layouts/index';
//
var initialStore = {
  isSet: false
}
//
function reducerTwo(state = initialStore, action) {
  switch (action.type) {
    case 'SETTRUE':
      return {
        ...state,
        isSet: action.payload.isSet
      }
    case 'SETFALSE':
      return {
        ...state,
        isSet: action.payload.isSet
      }
    default:
      return state;
  }
}
const reducer = combineReducers({
  reducer2: reducerTwo
})
//
const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension());

//
const SETTRUE = {
  type: 'SETTRUE',
  payload: {
    isSet: true
  }
}
const SETFALSE = {
  type: "SETFALSE",
  payload: {
    isSet: false
  }
}
var setVal = (val) => {
  store.dispatch(val);
}

//
class App extends React.Component{
  render() {
    return (
      <Router>
        <Switch>
          <Layout.NonPrivateRoute exact path="/home" component={Container.Home} />
          <Layout.PrivateRoute exact path="/dashboard" component={Container.Dashboard}/>
        </Switch>
        {/* <button onClick={() => setVal(SETTRUE)}>SET TRUE</button>
        <br/>
        <button onClick={() => setVal(SETFALSE)}>SET FALSE</button> */}
      </Router>
    )
  }
}
export default App;