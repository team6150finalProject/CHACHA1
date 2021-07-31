import {combineReducers} from "redux";
import isEmpty from 'lodash/isEmpty'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    REGISTER_SUCCESS,
    ERROR_MSG_REGISTER,
    SYNC_STATE_INFO
} from "./action-types";

const initUser ={
    isAuth: false,
    email: '',
    msg: '',
    username:'',
    redirectTo: '',
}

function user(state=initUser, action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {isAuth: !isEmpty(action.data),
                    ...action.data,
                    redirectTo: '/' }
        case ERROR_MSG:
            return {...state, msg: action.data}
        default:
            return state
    }
}
function userregister(state=initUser, action){
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...action.data, redirectTo: '/signin',msg: '' }
        case ERROR_MSG_REGISTER:
            return {...state, msg: action.data}
        default:
            return state
    }
}
const loginUser ={
    isAuth: false,
    user:{}
}

function syncInfoAc(state =loginUser,action){
    switch (action.type) {
        case SYNC_STATE_INFO:
            return {isAuth: !isEmpty(action.data),
                    user:action.data}
        default:
            return state
    }
}

export default combineReducers({
     syncInfo: syncInfoAc,
     userreducer: user,
    registerreducer: userregister,
})