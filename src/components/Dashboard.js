import React from 'react';
import { logout , authenticate , getCheckInStatus , logCheckIn , updateCheckIn } from '../models/Auth';
import { connect } from 'react-redux';
import moment from 'moment';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    authenticate();
    var uid = this.props.userId;
    getCheckInStatus(uid);
  }
  checkin() {
    var uid = this.props.userId;
    logCheckIn(uid);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e) {
    var uid = this.props.userId;
    e.preventDefault();
    updateCheckIn(uid, this.state.text , moment().unix());
    this.setState({
      text:''
    })
  }
  renderCheckedIn = () => {
    var uid = this.props.userId;
    let data = this.props.checkInInfo;
    let checkOutDate = this.props.checkInInfo.checkOutTime;
    if (data.length===0)
    {
      return <div><button onClick={() => this.checkin()}>CheckIn</button></div>
    }
    else
    {
      if (checkOutDate)
      {
        return <div>Thanks for Checking in today</div>
      }
      else {
        return <form onSubmit={this.handleSubmit}>
          <input type="textarea" name="text" placeholder="CheckOut message" onChange={this.handleChange} />
          <button>CheckOut</button>
        </form>
      }
    }

  }
  render() {
    var userInfo = this.props.userInfo;
    return (
      <div>
        Logged in as "{userInfo}"
        <button onClick={logout}>Logout</button>
        {this.renderCheckedIn()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.currentUser.displayName,
    userId: state.currentUser.uid,
    loader: state.loader,
    checkInInfo : state.checkIn
  }
}
export default connect(mapStateToProps)(Dashboard);