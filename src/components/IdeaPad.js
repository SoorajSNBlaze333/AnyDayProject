import React from 'react';
import { Box, Button, Section, Columns } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';

class IdeaPad extends React.Component {
  render() {
    return (
      <div><Box className="box">
        <div className="textLarge link textColor">IdeaPad</div>
        <Button className="text button-align text color textColor"><NavLink to="/dashboard" className="text link ">Back</NavLink></Button>
      </Box>
        <Section className="section">
          <Columns>
            <Columns.Column>
              <textarea className="textarea" placeholder="Enter your ideas , All suggestions are considered" />
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
export default IdeaPad