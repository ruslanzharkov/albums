import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostsScreen from '../../components/PostsScreen/PostsScreen';
import {actionCreators} from '../../actions';

class PostContainer extends Component {
    render() {
        return (
            <PostsScreen
                getPosts={this.props.getPosts}
                posts={this.props.posts}
                navigation={this.props.navigation}
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
        getPosts: actionCreators.getPosts
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
