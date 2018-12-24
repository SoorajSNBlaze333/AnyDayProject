import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../models/Auth';
import { Loader, Button, Box, Section , Tag , Columns } from 'react-bulma-components/full';
import CheckStatus from '../components/CheckStatus';
import { NavLink } from 'react-router-dom';
import MyLoader from '../components/MyLoader';

class Dashboard extends React.Component {

  renderCheckStatus() {
    return (
     <CheckStatus/>
   )
  }

  renderComponents() {
    var user = this.props.user;
    var loader = this.props.loader;
      if (loader)
      {
        // return <Loader className="loader" />
        return <MyLoader />
      }
      else
      {
        if (user)
        {
          return (
            <div>
              <Box className="box">
                <Button className="text button-align color textColor" onClick={logOut}> LogOut</Button>
                <div className="textSmall link">{user.displayName}</div>
              </Box>
              <div className="Navbar">
                <Columns>
                  <Columns.Column size={3}>
                    <Button className="text bcolor textColor"><NavLink to="/leaveform" className="textSmall link">LeaveForm</NavLink></Button>
                  </Columns.Column>
                  <Columns.Column size={3}>
                    <Button className="text bcolor textColor"><NavLink to="/ideapad" className="textSmall link">Ideapad</NavLink></Button>
                  </Columns.Column>
                  <Columns.Column size={3}>
                    <Button className="text bcolor textColor"><NavLink to="/tikomi" className="textSmall link">Tikomi</NavLink></Button>
                  </Columns.Column>
                  <Columns.Column size={3}>
                    <Button className="text bcolor textColor"><NavLink to="/leaderboard" className="textSmall link">LeaderBoard</NavLink></Button>
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