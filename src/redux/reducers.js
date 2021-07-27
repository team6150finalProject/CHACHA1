import {combineReducers} from "redux";
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    REGISTER_SUCCESS,
    ERROR_MSG_REGISTER,
} from "./action-types";

const initUser ={
    email: '',
    msg: '',
    username:'',
    redirectTo: '',
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
export default combineReducers({
     userreducer: user,
    registerreducer: userregister,
})