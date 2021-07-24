import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";

const INITIAL_STATE = {
    IsSignedIn : null
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case SIGN_IN :
            return {...state, IsSignedIn: true}
        case SIGN_OUT:
            return {...state, IsSignedIn: false} 
        default:
            return state;
    }
};