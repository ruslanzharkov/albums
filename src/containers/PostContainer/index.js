import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsScreen from '../../components/postsComponent';
import { actionCreators } from '../../actions';

class Index extends Component {
    render() {
        return (
            <PostsScreen
                posts={this.props.posts}
                navigation={this.props.navigation}

                getPosts={this.props.getPosts}
                getPostDetails={this.props.getPostDetails}
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
        getPosts: actionCreators.getPosts,
        getPostDetails: actionCreators.getPostDetails,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
