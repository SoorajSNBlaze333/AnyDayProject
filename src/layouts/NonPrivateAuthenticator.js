import { store } from '../Redux/store/store'
import { logOutUser, loginUser, loginSuccess } from '../Redux/actions/actions';
import { auth } from '../config/firebase';
import React from 'react';
import { Redirect } from 'react-router-dom';

class NonPrivateAuthenticator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextLink: null,
      authenticated: false
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
          this.setState({
            nextLink: '/dashboard',
            authenticated: true
          })
        }
        else {
          dispatch(logOutUser())
          this.setState({
            nextLink: null,
            authenticated: false
          })
        }
      })
    })
  }
  render() {
    if (this.state.nextLink && this.state.authenticated)
    {
      return <Redirect to = {{pathname: this.state.nextLink}} />
    }
    return (<div>{this.props.children}</div>)
  }
}
export default NonPrivateAuthenticator;
