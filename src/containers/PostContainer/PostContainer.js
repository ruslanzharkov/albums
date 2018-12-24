import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostsScreen from '../../components/PostsScreen/PostsScreen';

class PostContainer extends Component {
    render() {
        return(
            <View>
                <PostsScreen/>
            </View>
        )
    }
}

function mapStateToProps() {
    return {

    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);