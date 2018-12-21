import React from 'react';
import { Box , Button , Section , Columns } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';

class LeaveForm extends React.Component{
  render() {
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
              <input className="input" type="date" />
            </Columns.Column>
            <Columns.Column size={2}></Columns.Column>
            <Columns.Column size={1}>
              <div>To</div>
            </Columns.Column>
            <Columns.Column size={4}>
              <input className="input" type="date" />
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <div>Reason</div>
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <textarea className="textarea" placeholder="Enter the reason for availing leave" />
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <Button className="button-align">Submit</Button>
            </Columns.Column>
          </Columns>
        </Section>
      </div>
    )
  }
}
export default LeaveForm