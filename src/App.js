import React from 'react';
import { combineReducers, createStore } from 'redux';
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
      <div>
        <button onClick={() => setVal(SETTRUE)}>SET TRUE</button>
        <br/>
        <button onClick={() => setVal(SETFALSE)}>SET FALSE</button>
      </div>
    )
  }
}
export default App;