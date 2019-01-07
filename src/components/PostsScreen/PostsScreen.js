import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <View>
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
