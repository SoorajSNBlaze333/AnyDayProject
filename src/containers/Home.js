import React from 'react';
import { logIn } from '../models/Auth';
import { connect } from 'react-redux';
import { Loader } from 'react-bulma-components/full';

class Home extends React.Component {
    renderComponent() {
        const loader = this.props.loader;
        const user = this.props.user;
        if (user) {
            if (loader) {
                return <Loader className="loader" />
            }
        }
        else {
            if (loader) {
                return <Loader className="loader" />
            }
            else {
                return <button onClick={logIn}>Login</button>
            }
        }
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
        user : state.currentUser,
        loader: state.loader,
    }
}
export default connect(mapStateToProps)(Home);