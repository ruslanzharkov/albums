import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        console.log(this.props.posts, 'posts');
        return (
            <View>
                <Text>List</Text>
                {this.props.posts && this.props.posts.map(item => <Text>{item.name}</Text>)}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default PostsScreen;
