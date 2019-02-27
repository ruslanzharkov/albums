import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import SignUpScreen from '../../components/SignUpScreen';

class SignUpContainer extends Component {
    render() {
        return (
            <SignUpScreen
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
