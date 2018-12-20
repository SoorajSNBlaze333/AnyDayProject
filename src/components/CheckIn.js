import React from 'react';
import { Loader, Button, Box, Section } from 'react-bulma-components/full';
import { connect } from 'react-redux';

class CheckIn extends React.Component{
  renderCheck() {
    var checkIn = this.props.checkIn;
    if (checkIn) {
      return (
        <Section className="section">
          <Button>CheckOut</Button>
        </Section>)
    }
    else {
      return (
        <Section className="section">
          <Button>CheckIn</Button>
        </Section>)
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
    checkIn: state.checkIn
  }
}
export default connect(mapStateToProps)(CheckIn);