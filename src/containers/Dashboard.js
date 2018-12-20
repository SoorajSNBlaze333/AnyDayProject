import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../models/Auth';
import { Loader, Button, Box, Section } from 'react-bulma-components/full';
import CheckIn from '../components/CheckIn';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
class Dashboard extends React.Component {

  renderCheckIn() {
    return (
     <CheckIn/>
   )
  }

  renderComponents() {
    var loader = this.props.loader;
      if (loader)
      {
        return <Loader className="loader" />
      }
      else
      {
        return (
        <div>
          <Box className="box">
            <Button className="text button-align text color textColor" onClick={logOut}>LogOut</Button>
            </Box>
            <Section>
              {this.renderCheckIn()}
            </Section>
        </div>
        )
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
    loader: state.loader
  }
}
export default connect(mapStateToProps)(Dashboard);