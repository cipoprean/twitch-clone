import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createStream} from '../../actions/GoogleAuth';
import StreamForm from './StreamForm';

class StreamAdd extends Component {

    onSubmit = values => {
        this.props.createStream(values);
    }

    render() {
        return (
           <div>
               <h3>Create a Stream</h3>
               <StreamForm onSubmit={this.onSubmit}/>
           </div>
        )
    }
}

export default connect(null, {createStream})(StreamAdd);
