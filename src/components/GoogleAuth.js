import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/GoogleAuth';

 class GoogleAuth extends Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '426990221887-uusor79sinjpj4rlpr45j858d4bb1frk.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
      if(isSignedIn) {
        this.props.signIn();
      } else {
        this.props.signOut();
      }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }


    renderAuthButton()  {
        if(this.props.isSignedIn === null) {
            return null;
        }else if(this.props.isSignedIn) {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignOut}
                >
                    <i className="google icon" />
                        Sign Out
                </button>
            )
        }else {
            return (
                <button 
                className="ui red google button"
                onClick={this.onSignIn}
                >
                    <i className="google icon" />
                        Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.IsSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);