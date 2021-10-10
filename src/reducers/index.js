import { combineReducers } from 'redux';
import GoogleAuth from './GoogleAuth';
import { reducer as formReducer } from 'redux-form'
import streamReducer from './streamReducer';

export default combineReducers({
    auth: GoogleAuth,
    form: formReducer,
    streams: streamReducer
});