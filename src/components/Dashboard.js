import React from 'react';
import { logout , authenticate , checkInStatus , logCheckIn } from '../models/Auth';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }
  componentDidMount() {
    authenticate();
    this.checkedInStatus();
  }
  checkin() {
    const uid = this.props.userId;
    //console.log(uid);
    logCheckIn(uid);
  }
  renderCheckIn() {
    return <div><button onClick={() => this.checkin()}>CheckIn</button></div>
  }
  renderCheckOut() {
    return  <form>
              <input type="textarea" placeholder="..." />
              <button>CheckOut</button>
            </form>
  }
  checkedInStatus = () => {
    const uid = this.props.userId;
    var data = checkInStatus(uid);
    console.log(data);
    // if (data) {
    //   return this.renderCheckOut();
    // }
    // else {
    //   return this.renderCheckIn();
    // }
    return <div></div>
  }
  render() {
    const userInfo = this.props.userInfo;
    return (
      <div>
        Logged in as "{userInfo}"
        <button onClick={logout}>Logout</button>

        {this.checkedInStatus()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.currentUser.displayName,
    userId: state.currentUser.uid,
    checkInInfo: state.checkIn
  }
}
export default connect(mapStateToProps)(Dashboard);