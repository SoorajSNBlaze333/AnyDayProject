import React from 'react';
import { connect } from 'react-redux';
import { Box , Button , Section , Columns } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';
import MyLoader from '../components/MyLoader';
import { leaveFormSubmit } from '../models/Auth'
class LeaveForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      reason: '',
      numberOfDays: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitLeave = this.submitLeave.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    if (!this.state.toDate && this.state.fromDate) {
      this.setState({
        numberOfDays: 1
      })
    }
    if (!this.state.fromDate && !this.state.toDate) {
      this.setState({
        numberOfDays: 0
      })
    }
    if (this.state.toDate && this.state.fromDate){
      let toDate = new Date(this.state.toDate).getDate();
      let fromDate = new Date(this.state.fromDate).getDate();
      let diff = toDate - fromDate + 1;
      this.setState({
        numberOfDays: diff
      })
    }
  }
  submitLeave() {
    var user = this.props.user;
    leaveFormSubmit(user,this.state.fromDate,this.state.toDate,this.state.reason,this.state.numberOfDays)
    this.setState({
      fromDate: '',
      toDate: '',
      reason: '',
      numberOfDays: ''
    })
  }
  render() {
    let loader = this.props.loader;
    if (loader) {
      return <MyLoader/>
    }
    else {
      return (
        <div><Box className="box">
          <div className="textLarge link textColor">LeaveForm</div>
          <Button className="text button-align color textColor">
            <NavLink to="/dashboard" className="text link ">Back</NavLink>
          </Button>
        </Box>
          <Section className="section">
            <Columns>
              <Columns.Column size={1}>
                <div>On/From</div>
              </Columns.Column>
              <Columns.Column size={4}>
                <input className="input" name="fromDate" onChange={this.handleChange} type="date" />
              </Columns.Column>
              <Columns.Column size={1} offset={2}>
                <div>To</div>
              </Columns.Column>
              <Columns.Column size={4}>
                <input className="input" name="toDate" onChange={this.handleChange} type="date" />
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <div>Number Of Days :{this.state.numberOfDays}</div>
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <div>Reason</div>
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <textarea className="textarea" onClick={this.handleChange} onChange={this.handleChange} name="reason" placeholder="Enter the reason for availing leave" />
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <Button className="button-align" onClick={() => this.submitLeave()}>Submit</Button>
              </Columns.Column>
            </Columns>
          </Section>
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    user: state.currentUser
  }
}
export default connect(mapStateToProps)(LeaveForm);