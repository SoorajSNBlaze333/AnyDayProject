import React from 'react';
import { logIn } from '../models/Auth';
import { connect } from 'react-redux';
import { Loader, Button, Box } from 'react-bulma-components/full';
import MyLoader from '../components/MyLoader'

class Login extends React.Component {
    renderComponent() {
        const loader = this.props.loader;
        const user = this.props.currentUser;
        if (user)
        {
            if (loader) {
                // return <Loader className="loader" />
                return <MyLoader/>
            }
        }
        else {
            if (loader) {
                // return <Loader className="loader" />
                return <MyLoader />
            }
            else {
                return <Box className="box"><Button className="text button-align text color textColor" onClick={logIn}>Login</Button></Box>
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
export default connect(mapStateToProps)(Login);