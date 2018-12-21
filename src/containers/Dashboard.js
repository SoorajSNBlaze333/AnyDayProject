import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../models/Auth';
import { Loader, Button, Box, Section , Tag , Columns } from 'react-bulma-components/full';
import CheckStatus from '../components/CheckStatus';
class Dashboard extends React.Component {

  renderCheckStatus() {
    return (
     <CheckStatus/>
   )
  }

  renderComponents() {
    var user = this.props.user;
    console.log(user);
    var loader = this.props.loader;
      if (loader)
      {
        return <Loader className="loader" />
      }
      else
      {
        if (user)
        {
          return (
            <div>
              <Box className="box">
                <Button className="text button-align color textColor" onClick={logOut}> LogOut</Button>
                <div className="textSmall textColor">{user.displayName}</div>
              </Box>
              <div className="Navbar">
                <Columns>
                  <Columns.Column size={4}>
                    <a href="http://localhost:3000/dashboard/leaveform"  className="textSmall textColor">LeaveForm</a>
                  </Columns.Column>
                  <Columns.Column size={4}>
                    <div className="textSmall textColor">IdeaPad</div>
                  </Columns.Column>
                  <Columns.Column size={4}>
                    <div className="textSmall textColor">Tikomi</div>
                  </Columns.Column>
                </Columns>
              </div>
              <Section className="checkInStatus">
                {this.renderCheckStatus()}
              </Section>
            </div>
          )
        }
      }
  }
  render() {
    return (
      <div>
        {this.renderComponents()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    user: state.currentUser
  }
}
export default connect(mapStateToProps)(Dashboard);