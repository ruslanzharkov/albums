import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostsScreen from '../../components/PostsScreen/PostsScreen';
import {actionCreators} from '../../actions';

class PostContainer extends Component {
    render() {
        return (
            <View>
                <PostsScreen getPosts={this.props.getPosts}/>
            </View>
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
