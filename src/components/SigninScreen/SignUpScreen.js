import React, {Component} from "react";
import imglogo from './img/logo.jpg'
import {Link} from "react-router-dom";
import './Signin.css'

class SignUpScreen extends Component{
    render() {
        return(
            <div>
                <section>
            <div className="body_signin_container">
                <div className="body_signin_Bx">
                    <div className='body_user'>
                        <div className="container_form_signIn">
                            <form action="#" className="form_signIn" id="form_for_signUp">
                                <h2>CREATE AN ACCOUNT</h2>
                                <div className='form_signup_user'>
                                    <input type="text" placeholder="Username" className= "signup_input"/>
                                </div>
                                <div className="form_signup_email">
                                    <input type="email" placeholder="Email Address" className= "signup_input"/>
                                </div>
                                <div className="form_signup_password">
                                    <input type="password" placeholder="Create PassWord" className= "signup_input"/>
                                </div>
                                <div className="form_signup_password">
                                    <input type="password" placeholder="Confirm PassWord" className= "signup_input"/>
                                </div>
                                <div className="Signup-button">
                                <button>Sign Up</button>
                                </div>
                                    <div className='form_returnaccount'>
                                        <label/>
                                        <div>
                                            ALREADY HAVE AN ACCOUNT? { ' '}
                                            <Link to='/signin'>SIGN IN</Link>
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

export default SignUpScreen;