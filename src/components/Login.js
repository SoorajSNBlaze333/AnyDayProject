import React from 'react';
import { auth , provider } from '../config/firebase';
import { connect } from 'react-redux';
import { LoggedIn , LoggedOut } from '../actions/Login'
import { store } from '../reducers/rootreducer';
import { Button , Columns , Heading ,  Box } from 'react-bulma-components/full';

class Login extends React.Component{
    logout = () =>{
        auth.signOut()
        .then(() => {  
            window.localStorage.removeItem("displayName");
            store.dispatch(LoggedOut);
            document.getElementById("box").style.minHeight = "100vh";  
            //window.location.reload();
        });
    }
    
    login = () => {
        auth.signInWithPopup(provider) 
        .then((result) => {
          const displayName = result.user.displayName;
          window.localStorage.setItem("displayName",displayName);
          store.dispatch(LoggedIn);
          document.getElementById("box").style.minHeight = "100px";
        });
    }
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            store.dispatch(LoggedIn);
            document.getElementById("box").style.minHeight = "100px";
          }
          else{
            document.getElementById("box").style.minHeight = "100vh";
          }
        });
    }
    render(){
        
        const usern = this.props.username;
        
        return(
            <div>
                <Box id="box">
                    <Columns>
                        <Columns.Column size={8} className="center-align">
                            <Heading size={6}>
                                <div className="textColor title large-text">AnyDay</div> 
                            </Heading> 
                        </Columns.Column>
                        <Columns.Column size={2} className="center-align">
                            <div >
                                {usern ? 
                                <Columns>
                                <Columns.Column>
                                    <div className="textColor text ">{window.localStorage.getItem("displayName")}</div> 
                                </Columns.Column >
                                </Columns>
                                :
                                <Columns>
                                <Columns.Column>
                                    <div className="textColor text">Hi there, Login to use AnyDay</div>
                                </Columns.Column>
                                </Columns>           
                                }
                            </div>
                        </Columns.Column>
                        <Columns.Column size={2} className="button-align">
                            <div>
                                {usern ? 
                                <Columns>
                                    <Columns.Column>
                                        <Button className="color text textColor" onClick={this.logout}>Log Out</Button>
                                    </Columns.Column>
                                </Columns>
                                :
                                <Columns>
                                    <Columns.Column>
                                        <Button className="color text textColor" onClick={this.login}>Log In</Button>
                                    </Columns.Column>
                                </Columns>   
                                }  
                            </div>
                        </Columns.Column>                                         
                    </Columns>                        
                </Box>  
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        username: state.user
    }
}
export default connect(mapStateToProps)(Login);