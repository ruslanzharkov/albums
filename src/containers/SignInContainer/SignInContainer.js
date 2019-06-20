import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../actions';
import SignInScreen from '../../components/SignInComponent';

class SignInContainer extends Component {
    render() {
        return (
            <SignInScreen
                navigation={this.props.navigation}

                signIn={this.props.signIn}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        signIn: actionCreators.signIn
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
