import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import { db } from '../../config/db';
import Header from '../common/Header';

class PostsScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        this.props.getPosts();
        // db.ref('posts/1').set({
        //     author: 'Zharkov Ruslan',
        //     title: 'About React Native',
        //     content: 'React Native lets you build mobile apps using JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. With React Native, you dont build a mobile web app, an HTML5 app, or a hybrid app. You build a real mobile app thats indistinguishable from an app built using Objective-C, Java, Kotlin, or Swift. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React. React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With hot reloading, you can even run new code while retaining your application state. React Native combines smoothly with components written in Objective-C, Java, Kotlin, or Swift. Its simple to drop down to native code if you need to optimize a few aspects of your application. Its also easy to build part of your app in React Native, and part of your app using native code directly - thats how the Facebook app works.'
        // }).then(() => console.log('success!'))
        // .catch((err) => console.log(err));
    }

    renderPosts = () => {
        if (_.isEmpty(this.props.posts))  
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );

        return this.props.posts.map((item, index) =>
            <View key={index} style={styles.postContainer}>
                <View style={styles.innerPostContainer}>
                    <View>
                        <Text>
                            {item.author}
                        </Text>
                    </View>
                    
                    <View style={styles.aboutContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Title:
                            </Text>
                            <Text>
                                {item.title}
                            </Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Date:
                            </Text>
                            <Text>
                                {'10/01/19 23:44'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View>
                {this.renderPosts()}
            </View>
        );
    }
}

export default PostsScreen;

const styles = {
    activity: {
        marginTop: 20
    },
    postContainer: {
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    innerPostContainer: {
        flexGrow: 1,
        flexDirection: 'column',  
    },
    viewStyle: {
        flex: 1,
        marginTop: 5
    },
    aboutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    titleContainer: {
        flexDirection: 'row',
    },
    titleContent: {
        color: '#ada6a6',
        marginRight: 4
    }
};