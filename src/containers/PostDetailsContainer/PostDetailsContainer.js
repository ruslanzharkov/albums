import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostDetailsScreen from '../../components/PostDetails';

class PostDetailsContainer extends Component {
    render() {
        return (
            <PostDetailsScreen postDetails={this.props.postDetails} />
        );
    }
}

function mapStateToProps(state) {
    return {
        postDetails: state.postDetails
    };
}

function mapDispatchToProps(dispatch) {
    const actions = {

    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsContainer);
