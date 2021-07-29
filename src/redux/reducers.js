import {combineReducers} from "redux";
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    REGISTER_SUCCESS,
    ERROR_MSG_REGISTER,
    SYNC_STATE_INFO
} from "./action-types";

const initUser ={
    email: '',
    msg: '',
    username:'',
    redirectTo: '',
    token:''
}

function user(state=initUser, action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data, redirectTo: '/' }
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

function syncInfoAc(state =initUser,action){
    switch (action.type) {
        case SYNC_STATE_INFO:
            return {...action.data}
        default:
            return state
    }
}

export default combineReducers({
     syncInfo: syncInfoAc,
     userreducer: user,
    registerreducer: userregister,
})