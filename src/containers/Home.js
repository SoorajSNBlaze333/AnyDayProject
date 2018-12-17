import React from 'react';
import { login, authenticate } from '../models/Auth';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

class Home extends React.Component {
    componentDidMount() {
        authenticate();
    }
    renderComponent() {
        const currentuser = this.props.currentUser;
        if (currentuser) {
            return this.renderDashboard();
        }
        else {
            return this.renderLogin();
        }
    }
    renderLogin() {
        return (
            <div>
                <button onClick={login}>Login</button>
            </div>
        )
    }
    renderDashboard() {
        return (
            <div>
                <Dashboard/>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.renderComponent()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        currentUser: state.currentUser,
    }
}
export default connect(mapStateToProps)(Home);