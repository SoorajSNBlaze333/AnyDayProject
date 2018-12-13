import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../Configurations/firebase';

class Authenticator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      authenticated: false,
      error: "",
      newLink: null
    }
  }
  componentDidMount() {
    this.authenticate();
  }
  authenticate() {
    if (this.props.reverse) {
      this.setState({
        loading: false,
        authenticated: true,
        newLink: "/home"
      })
    }
    else if (!this.props.reverse) {
      var userem = firebase.auth().currentUser.email;
      if (userem) {
        this.setState({
          authenticated: true,
          loading: true,
          newLink: "/dashboard"
        })
      }
      else {
        this.setState({
          authenticated: false,
          loading: false,
          newLink: "/home"
        })
      }
    }
  }

  render() {
    if (this.state.newLink) {
      return (<Redirect to={{ pathname: this.state.newLink }} />)
    }
    return (<div>{this.props.children}</div>)
  }
}
export default Authenticator;