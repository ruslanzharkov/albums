import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { db } from '../../config/db';
import Header from '../common/Header';

class PostsScreen extends Component {
    componentDidMount() {
        this.props.getPosts();
        db.ref('posts/1').set({
            author: 'Zharkov Ruslan',
            title: 'About React Native',
            content: 'React Native lets you build mobile apps using JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. With React Native, you dont build a mobile web app, an HTML5 app, or a hybrid app. You build a real mobile app thats indistinguishable from an app built using Objective-C, Java, Kotlin, or Swift. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React. React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state. React Native combines smoothly with components written in Objective-C, Java, Kotlin, or Swift. Its simple to drop down to native code if you need to optimize a few aspects of your application. Its also easy to build part of your app in React Native, and part of your app using native code directly - thats how the Facebook app works.'
        }).then(() => console.log('success!'))
        .catch((err) => console.log(err));
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
