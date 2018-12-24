import React from 'react';
import { Button, Section ,Columns } from 'react-bulma-components/full';
import { connect } from 'react-redux';
import { checkInFirestore , getCheckInStatus , checkOutFirestore , convertUnix } from '../models/Auth';
import moment from 'moment';
import MyLoader from '../components/MyLoader';

class CheckStatus extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      checkOutMessage: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.checkOutUser = this.checkOutUser.bind(this);
  }
  checkInUser() {
    var user = this.props.user;
    checkInFirestore(user);
    getCheckInStatus(user);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  checkOutUser() {
    var user = this.props.user;
    checkOutFirestore(user,this.state.checkOutMessage);
    getCheckInStatus(user);
    this.setState({
      checkOutMessage:''
    })
  }
  renderCheck() {
    var checkIn = this.props.checkIn;
    var loader = this.props.loader;
    if (loader) {
      // return <Loader className="loader" />
      return <MyLoader />
    }
    else {
      if (checkIn) {
        if (!checkIn.checkOutTime)
        {
          return (
            <div className="shadow">
              <Section className="section">
                <textarea name="checkOutMessage" onChange={this.handleChange} value={this.state.checkOutMessage} className="textarea" rows="4" cols="50" placeholder="Enter Checkout message here..." />
                <Button className="button-align" onClick={() => this.checkOutUser()}>CheckOut</Button>
              </Section>
            </div>

          )
        }
        if (checkIn.checkOutTime && checkIn.checkInDate === moment().format('DD-MM-YYYY')){
          return (
            <div className="shadow">
                <Section className="text message-header">Your Checkout summary</Section>
                <br></br>
                  <Section className="section">
                <Columns className="message">
                  <Columns.Column size={10}>
                    <div className="textSmall textColor">{checkIn.checkOutMessage}</div>
                  </Columns.Column>
                  <Columns.Column size={2}>
                    <div className="textSmall textColor">{convertUnix(checkIn.checkOutTime)}</div>
                  </Columns.Column>
                  </Columns>
                </Section>
                <Section className="section">Thanks for Checking in for the day , See you tomorrow!!</Section>
            </div>
          )
        }

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