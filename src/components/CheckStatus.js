import React from 'react';
import { Loader, Button, Box, Section , Input } from 'react-bulma-components/full';
import { connect } from 'react-redux';
import { checkInFirestore } from '../models/Auth'

class CheckStatus extends React.Component{
  checkInUser() {
    var user = this.props.user;
    var checkIn = this.props.checkIn;
    checkInFirestore(checkIn,user);
  }
  renderCheck() {
    var checkIn = this.props.checkIn;
    var loader = this.props.loader;
    if (loader) {
      return <Loader/>
    }
    else {
      if (checkIn) {
        return (
          <Section className="section">
            <Input type="text" placeholder="Enter Checkout Message" />
            <Button >CheckOut</Button>
          </Section>)
      }
      else {
        return (
          <Section className="section">
            <Button onClick={() => this.checkInUser()}>CheckIn</Button>
          </Section>)
      }
    }
  }
  render() {
    return (
    <div>{this.renderCheck()}</div>
  )
}
}
const mapStateToProps = (state) => {
  return {
    checkIn: state.checkIn,
    user: state.currentUser,
    loader: state.loader
  }
}
export default connect(mapStateToProps)(CheckStatus);