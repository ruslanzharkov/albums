import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Header from '../common/Header';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <View>
                <Header title={'Albums'}/>
                {this.props.posts && this.props.posts.map((item, index) =>
                    <Text key={index}>{item.name}</Text>)
                }
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default PostsScreen;
