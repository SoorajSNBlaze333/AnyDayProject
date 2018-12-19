import React from 'react';
// import { getCheckInStatus } from '../models/Auth';
import { connect } from 'react-redux';
import { logOut } from '../models/Auth';
import { Loader } from 'react-bulma-components/full'

class Dashboard extends React.Component {
  renderComponents() {
    var loader = this.props.loader;
    var displayName = this.props.displayName;
      if (loader)
      {
        return <Loader className="loader" />
      }
      else
      {
        console.log("cameee-!----")
        return <div>{displayName}<button onClick={logOut}>LogOut</button></div>
      }
  }
  render() {
    return (
      <div>
        Dashboard
        {this.renderComponents()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
    loader: state.loader,
    displayName: state.displayName,
  }
}
export default connect(mapStateToProps)(Dashboard);