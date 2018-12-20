import { store } from '../Redux/store/store'
import { logOutUser, loginUser, loginSuccess } from '../Redux/actions/actions';
import { auth } from '../config/firebase';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { getCheckInStatus } from '../models/Auth';

class PrivateAuthenticator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      prevlink: null
    }
  }
  componentDidMount() {
    this.authenticate();

  }
  authenticate() {
    store.dispatch((dispatch) => {
      dispatch(loginUser())
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(loginSuccess(user))
          getCheckInStatus(user.uid)
          this.setState({
            authenticated:true,
            prevlink: null
          })
        }
        else {
          dispatch(logOutUser())
          this.setState({
            authenticated: false,
            prevlink:'/login'
          })
        }
      })
    })
  }
  render() {
    if (this.state.prevlink && !this.state.authenticated)
    {
      return <Redirect to={{ pathname: this.state.prevlink }} />
    }
    return (<div>{this.props.children}</div>)
  }
}
export default PrivateAuthenticator;
