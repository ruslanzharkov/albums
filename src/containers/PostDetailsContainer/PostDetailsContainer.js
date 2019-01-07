import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostDetailsScreen from '../../components/PostDetails';

class PostDetailsContainer extends Component {
    render() {
        return (
            <PostDetailsScreen />
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {

    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);