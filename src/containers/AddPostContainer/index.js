import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddPostScreen from '../../components/addPostComponent';
import { actionCreators } from '../../actions';

class PostContainer extends Component {
    render() {
        return (
            <AddPostScreen
                addNewPost={this.props.addNewPost}
                posts={this.props.posts}
            />
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
        addNewPost: actionCreators.addNewPost
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
