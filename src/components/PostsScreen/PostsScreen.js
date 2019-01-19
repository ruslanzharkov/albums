import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import Header from '../common/Header';
import firebase from 'react-native-firebase';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
        firebase.auth().signInAnonymously()
            .then((user) => {
                console.log(user.isAnonymous);
            })
            .catch(err => {
                console.log(err);
            }); 
    }

    render() {
        return (
            <View>
                <Header title={'Albums'} />
                {this.props.posts && this.props.posts.map((item, index) =>
                    <Text key={index}>
                        {item.name}
                    </Text>)
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
