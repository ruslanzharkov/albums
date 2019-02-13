import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPostScreen from '../../components/AddPostScreen';
import { actionCreators } from '../../actions';

class PostContainer extends Component {
    render() {
        return (
            <AddPostScreen/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
