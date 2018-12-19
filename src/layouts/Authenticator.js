import { store } from '../Redux/store/store'
import { logOutUser, loginUser, loginSuccess , noAuthenticate } from '../Redux/actions/actions';
import { auth } from '../config/firebase';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Authenticate extends React.Component {
  componentDidMount() {
    this.authenticate();
  }
  authenticate() {
    store.dispatch((dispatch) => {
      dispatch(loginUser())
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(loginSuccess(user))
        }
        else {
          if (this.props.reverse) {
            store.dispatch(noAuthenticate());
          }
          else {
            dispatch(logOutUser())
          }
        }
      })
    })
  }


  render() {
    if (this.props.nextLink)
    {
      return <Redirect to = {{pathname: this.props.nextLink}} />
    }
    return (<div>{this.props.children}</div>)
  }
}
const mapStateToProps = (state) => {
  return {
    nextLink:state.nextLink
  }
}
export default connect(mapStateToProps)(Authenticate);
