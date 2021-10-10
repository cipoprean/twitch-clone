import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {

    renderErrorMessages({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
            )
        }
    }

    renderInput = ({label,input, meta}) => {

        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderErrorMessages(meta)}
            </div>
        )
    }

    onSubmit = values => {
        this.props.onSubmit(values);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validateForm = (values) => {

    const errorObj ={};
    if(!values.title){
        errorObj.title = "You must enter a title";
    }

    if(!values.description) {
        errorObj.description = "You must enter a description";
    }

    return errorObj;
}

export default reduxForm({
    form: 'streamForm',
    validate: validateForm
})(StreamForm)

