import React, {Component} from "react";
import img1URL from './img/img_signin.png'
import img2URL from './img/img_signin02.png'
import imglogo from './img/logo.jpg'
import { Link, HashRouter, Route} from "react-router-dom";


class SignInScreen extends Component {
    render() {
        return(
            <div className="body_signin_container">
                <div className="body_signin_Bx">
                    <div className='body_user'>
                    <div className="imgBx"><img src={imglogo}/> </div>
                    <div className="container_form_signIn">
                        <form action="#" className="form_signIn" id="form_for_signIn">
                            <h2>Sign In</h2>
                        <div className="form_signin_email">
                            <img src={img1URL} alt=''/>
                            <input type="email" placeholder="Enter Email" className= "signIn_input"/>
                        </div>
                        <div className="form_signin_email">
                            <img src={img2URL} alt=''/>
                            <input type="password" placeholder="Enter PassWord" className= "signIn_input"/>
                        </div>
                        <div className="form_checkbox">
                            <p><input type="checkbox" className="custom-control-input" id="check1"/>Remember Password</p>
                        </div>
                            <button>Login</button>

                        <HashRouter>
                            <div className='form_createaccount'>
                                <label/>
                                <div>
                                    New Customer? { ' '}
                                    <Link to='/SignUpScreen' >Create Your Account</Link>
                                </div>
                            </div>
                        </HashRouter>

                        </form>
                    </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default SignInScreen;