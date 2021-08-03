import {reqLogin, reqRegister, reqUserData} from "../api";
import cookie from 'react-cookies';
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    REGISTER_SUCCESS,
    ERROR_MSG_REGISTER,
    SYNC_STATE_INFO,
    FETCH_USER_DATA
} from "./action-types";
import data from "bootstrap/js/src/dom/data";
import decode from "jwt-decode";

//signin action

const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user});
const errormsg = (msg) => ({type: ERROR_MSG, data: msg});
//signup action
const registerSuccess = (user) => ({type: REGISTER_SUCCESS, data: user});
const errormsgreg =(msg)=> ({type: ERROR_MSG_REGISTER, data: msg});
const fetchUserData = data => ({type: FETCH_USER_DATA, data: data});

export const login =(user)=>{
    const {email, password}= user
    //frontend adjust
    if(!email){
        return errormsg('Please enter email!')
    }else if(!password){
        return errormsg('Please enter Password!')
    }
    return async dispatch => {
        const response = await reqLogin(user)
        const result =response.data
        if(result.code === 0){  //signin success
            dispatch(authSuccess(result.data))
            localStorage.setItem('@#@TOKEN',result.token)
            dispatch( syncInfoAc(decode(result.token)))
        }else{     //sigin failure
            dispatch(errormsg(result.msg))
        }
    }
}

export const register =(user) =>{
    const {email, password, confirmPassword} =user
    if(!email){
        return errormsgreg('Please enter email!')
    }else if(!password) {
        return errormsgreg('Please enter password!')
    }else if(!confirmPassword){
        return errormsgreg('Please enter Password against')
    }else if(password !== confirmPassword){
        return errormsgreg('The two passwords must be the same')
    }
    return async dispatch =>{
        const response = await reqRegister(user)
        const result =response.data
        if(result.code ===0){
            dispatch(registerSuccess(result.data))
        }else{
            dispatch(errormsgreg(result.msg))
        }
    }
}


export const syncInfoAc =data => {
    return{
        type: SYNC_STATE_INFO,
        data: data
    }
}

export const logOut =data => {
    return dispatch =>{
        localStorage.removeItem('@#@TOKEN');
        cookie.remove('orderNum');
        cookie.remove('drinkNum');
        dispatch(syncInfoAc({}));
        dispatch(fetchUserData({}));
    }
}


export const fetchData = () => {
  return async dispatch => {
      const response = await reqUserData();
      const result = response.data;
      if(result.code === 0){
          dispatch(fetchUserData(result.data));
      } else {
        localStorage.removeItem('@#@TOKEN');
        dispatch(syncInfoAc({}));
        dispatch(fetchUserData());
      }
  }
}