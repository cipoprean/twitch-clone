import { combineReducers } from 'redux';
import GoogleAuth from './GoogleAuth';
export default combineReducers({
    auth: GoogleAuth
});