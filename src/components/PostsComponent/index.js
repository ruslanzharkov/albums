import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import _ from 'lodash';
import Post from './post';

class PostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollEnabled: true
        };
    }

    componentDidMount() {
        this.props.getPosts();
    }

    setScrollEnabled = (enabled) => {
        this.setState({
            enabled
        });
    };

    goDetailsScreen = (postDetailInfo) => {
        this.props.getPostDetails(postDetailInfo);
        this.props.navigation.navigate('Details');
    };

    keyExtractor = (post, index) => `${index}`;

    renderItem = ({ item }) => (
        <Post
            onPress={this.goDetailsScreen}
            getPosts={this.props.getPosts}
            removePost={this.props.removePost}
            setScrollEnabled={this.setScrollEnabled}
            post={item}
        />
    );

    renderPosts = () => {
        if (_.isEmpty(this.props.posts)) {
            return (
                <View style={styles.activity}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        }

        return (
            <FlatList
                data={this.props.posts}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                scrollEnabled={this.state.scrollEnabled}
            />
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

export default PostsComponent;

const styles = {
    activity: {
        marginTop: 20
    },
    postContainer: {
        height: 100,
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
