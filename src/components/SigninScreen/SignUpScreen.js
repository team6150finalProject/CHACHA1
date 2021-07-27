import React, {Component} from "react";
import imglogo from './img/logo.jpg'
import {Link} from "react-router-dom";
import './Signin.css'
import {connect} from "react-redux";
import {register} from "../../redux/actions";
import {Redirect} from 'react-router-dom'
class SignUpScreen extends Component{
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            email: "",
            password: "",
            confirmPassword:"",
            emailChangstyle: false,
            passwordChangestyle:false,
        };
    }

    emailChange(e) {

        this.setState({
            email: e.target.value,
        });
    }
    userChange(e) {
        this.setState({
            username: e.target.value,
        });
    }
    passwordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }
    passwordChangeConfirm(e) {
        this.setState({
            confirmPassword: e.target.value,
        });
    }
    submitbutton =()=>{
        this.props.register(this.state)
    }

    render() {
        const {msg, redirectTo} =this.props.userregister
        console.log(redirectTo)
        if(redirectTo){
            return <Redirect to ={redirectTo}/>
        }
        return(
            <div>
                <section>
            <div className="body_signin_container">
                <div className="body_signin_Bx">
                    <div className='body_user'>
                        <div className="container_form_signIn">
                            <form action="#" className="form_signIn" id="form_for_signUp">
                                <h2>CREATE AN ACCOUNT</h2>
                                {msg?<div className='error-msg'>{msg}</div>:null}
                                <div className='form_signup_user'>
                                    <input type="text"  id="user" placeholder="Username" className= "signup_input" onChange={this.userChange.bind(this)}/>
                                </div>
                                <div className="form_signup_email">
                                    <input type="email" id="email" placeholder="Email Address" className= "signup_input" onChange={this.emailChange.bind(this)}/>
                                </div>
                                <div className="form_signup_password">
                                    <input type="password" id="password" placeholder="Create PassWord" className= "signup_input" onChange={this.passwordChange.bind(this)}/>
                                </div>
                                <div className="form_signup_password">
                                    <input type="password" id="confirmPassword" placeholder="Confirm PassWord" className= "signup_input" onChange={this.passwordChangeConfirm.bind(this)}/>
                                </div>
                                <div className="Signup-button">
                                <button type='button' onClick={this.submitbutton}>Sign Up</button>
                                </div>
                                    <div className='form_returnaccount'>
                                        <label/>
                                        <div>
                                            ALREADY HAVE AN ACCOUNT? { ' '}
                                            <Link to='/signin' >SIGN IN</Link>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <div className="imgBx"><img src={imglogo}/> </div>
                    </div>
                </div>
            </div>
                </section>
            </div>
        )
    }
}

export default connect(
    state =>({userregister: state.registerreducer}),
    {register}
)(SignUpScreen);