import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import SignUpScreen from '../../components/SignUpComponent';

class SignUpContainer extends Component {
    render() {
        return (
            <SignUpScreen
                navigation={this.props.navigation}
                loading={this.props.loading}

                signUp={this.props.signUp}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        signUp: actionCreators.signUp
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
