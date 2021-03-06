import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import ProfileScreen from '../../components/profileComponent';

class ProfileContainer extends Component {
    render() {
        return (
            <ProfileScreen
                navigation={this.props.navigation}
                loading={this.props.loading}
                currentUser={this.props.currentUser}

                getCurrentUser={this.props.getCurrentUser}
                logoutFromApp={this.props.logoutFromApp}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        currentUser: state.currentUser
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        getCurrentUser: actionCreators.getCurrentUser,
        logoutFromApp: actionCreators.logoutFromApp,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
