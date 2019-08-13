import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPostScreen from '../../components/AddPostComponent';
import { actionCreators } from '../../actions';

class PostContainer extends Component {
    render() {
        return (
            <AddPostScreen
                addNewPost={this.props.addNewPost}
                posts={this.props.posts}

                isLoading={this.props.isLoading}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        isLoading: state.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {
        addNewPost: actionCreators.addNewPost
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
