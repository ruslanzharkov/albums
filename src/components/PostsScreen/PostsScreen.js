import React, {Component} from 'react';
import {Text, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {db} from '../../config/db';

class PostsScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    componentDidMount() {
        this.props.getPosts();
        // db.ref('posts/1').set({
        //     author: 'Zharkov Ruslan',
        //     title: 'About React Native',
        //     content: ''
        // }).then(() => console.log('success!'))
        // .catch((err) => console.log(err));
    }

    goDetailsScreen = (postDetailInfo) => {
        this.props.getPostDetails(postDetailInfo);
        this.props.navigation.navigate('Details');
    };

    renderPosts = () => {
        if (_.isEmpty(this.props.posts))
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            );

        return this.props.posts.map((post, index) =>
            <View key={index} style={styles.postContainer}>
                <TouchableOpacity
                    style={styles.innerPostContainer}
                    onPress={() => this.goDetailsScreen(post)}
                >
                    <View>
                        <Text style={styles.author}>
                            {post.title}
                        </Text>
                    </View>

                    <View style={styles.aboutContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Author:
                            </Text>
                            <Text>
                                {post.author}
                            </Text>
                        </View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleContent}>
                                Date:
                            </Text>
                            <Text>
                                {'10/01/19'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.separateLine}/>
                </TouchableOpacity>
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
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
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
    },
    separateLine: {
        height: 1,
        backgroundColor: '#ededee'
    },
    author: {
        fontSize: 17
    }
};
