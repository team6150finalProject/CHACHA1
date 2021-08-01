import React from "react";
import {connect} from "react-redux";

export default function (Comp){
     class Auth extends React.Component {
        //if not register, turn to login
        componentWillMount() {
            console.log('enter')
            if(this.props.loginData.isAuth === false){
                alert('Please Login' )
                this.props.history.push ('/signin');
            }else{
                console.log('enter')
            }
        }
        componentWillUpdate(nextProps, nextState, nextContext) {
            if(!nextProps.loginData.isAuth && nextProps.loginData.isAuth !== this.props.loginData.isAuth){
                this.props.history.push ('/');
            }
        }

        render() {
            return <Comp {...this.props}/>
        }
    }
    return connect(
        state=>({loginData : state.syncInfo}),
        {}
        )(Auth);
}

