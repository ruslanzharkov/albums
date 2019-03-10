import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../actions';
import ProfileScreen from '../../components/ProfileScreen';

class ProfileContainer extends Component {
    render() {
        return (
            <ProfileScreen
                navigation={this.props.navigation}
                loading={this.props.loading}

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
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
