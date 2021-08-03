import React, {Component} from 'react';
import './Member.css'
import logo from './logo.jpg'
import vip from './vip.jpg'
import {connect} from "react-redux";
import {fetchData, logOut} from "../../redux/actions";
import Carousel from "react-bootstrap/Carousel";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {reqGetMembership} from "../../api";

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            password:''
        }
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

     handleClose = () => {
         this.setState({
             open: false
         })
    };
     handleEnter = async () => {
         this.setState({
             open: false
         })
         const data = {
             password: this.state.password,

         };
         const response = await reqGetMembership(data).catch(error => {
              console.log(error.response)
          })
          const result =response.data
          alert(result.msg )
     }
    getPassword(e) {
        const {value} =e.target;
            this.setState({
                password: value,
            })
    }
    handleClickCheck = () => {
    };


    render() {
        return (
            <div>
                <div className='member'>
                <h1>Member Management</h1>
                <hr/>
                    <h3>Card Information</h3>
                    <div className='cardStyle'>
                        <div className='card-info'>
                            <span style={{paddingLeft: 10, marginTop:10, display:"inline-block"}}>Name  :   <span style={{fontWeight: 'bold',fontStyle:'unset'}}>{this.props.loginData.userData.username}</span> </span>
                            <br/>
                            <span style={{paddingLeft: 10, marginTop:5,display:"inline-block"}}>Card ID : {this.props.loginData.userData.isadmin?
                                <span style={{fontSize:10}}>{this.props.loginid.user.id}</span>
                                :<span>xxxxxxxxxxxxxxxxx</span>}</span>
                        </div>
                        <div className='card-logo'>
                            <img src={logo} style={{width:80, height:80}}/>
                        </div>
                        <div className='card-button'>
                            <p>V I P</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Membership privileges</h3>
                    <div className='member-privileges'>
                        <Carousel id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
                            <Carousel.Item>
                                <img src={vip} className="d-block w-100" alt="privileges1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={vip} className="d-block w-100" alt="privileges2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={vip} className="d-block w-100" alt="privileges3" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={vip} className="d-block w-100" alt="privileges4" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Member points: </p>
                        <span>* Meet point exchange member </span>
                        <button onClick={this.handleClickCheck}> Exchange member</button>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
                                Try Free Membership
                            </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Do you want to try 15 days free membership? Enter your Password
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="password"
                                        type="password"
                                        fullWidth
                                        onChange={this.getPassword.bind(this)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="default">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleEnter} color="default">
                                        Try
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <hr/>
                        <button>Renewal Membership</button>
                    </div>

                </div>
            </div>


        );
    }
}

export default connect(
    state=>({loginData : state.fetchreducer,
        loginid : state.syncInfo
    }),
    {fetchData,logOut}
)(Member);


