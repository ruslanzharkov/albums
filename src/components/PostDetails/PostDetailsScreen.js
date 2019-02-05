import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PostDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.postDetails.title}</Text>
            </View>
        );
    }
}

export default PostDetailsScreen;
