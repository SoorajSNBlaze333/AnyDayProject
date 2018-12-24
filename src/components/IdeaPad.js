import React from 'react';
import { Box, Button, Section, Columns } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';
import { ideaPadSubmitIdea } from '../models/Auth';
import { connect } from 'react-redux';
class IdeaPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitIdea = this.submitIdea.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitIdea() {
    var user = this.props.user;
    ideaPadSubmitIdea(user,this.state.idea)
    this.setState({
      idea: ''
    })
  }
  render() {
    return (
      <div><Box className="box">
        <div className="textLarge link textColor">IdeaPad</div>
        <Button className="text button-align text color textColor"><NavLink to="/dashboard" className="text link ">Back</NavLink></Button>
      </Box>
        <Section className="section">
          <Columns>
            <Columns.Column>
              <textarea className="textarea" name="idea"  onChange={this.handleChange} placeholder="Enter your ideas , All suggestions are considered" />
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column>
              <Button className="button-align" onClick={()=>this.submitIdea()}>Submit</Button>
            </Columns.Column>
          </Columns>
        </Section>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user:state.currentUser
  }
}
export default connect(mapStateToProps)(IdeaPad);