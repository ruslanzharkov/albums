import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import SignInScreen from '../../components/SignInScreen';

class SignInContainer extends Component {
    render() {
        return (
            <SignInScreen
                navigation={this.props.navigation}
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

    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
