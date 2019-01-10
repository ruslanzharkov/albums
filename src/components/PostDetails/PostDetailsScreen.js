import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../common/Header';

class PostDetailsScreen extends Component {
    render() {
        return (
            <View>
                <Header title={'Albums'}/>
                <Text>Details screen</Text>
            </View>
        );
    }
}

export default PostDetailsScreen;
