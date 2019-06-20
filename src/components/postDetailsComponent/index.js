import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PostDetailsComponent extends Component {
    static defaultNavigationOptions = {
        title: 'Hello!',
    };

    renderContent = () => {
        return (
            <View style={styles.containerContent}>
                <Text style={styles.title}>
                    {this.props.postDetails.title}
                </Text>
                <Text style={styles.author}>
                    {this.props.postDetails.author}
                </Text>
                <Text style={styles.postContent}>
                    {this.props.postDetails.content}
                </Text>
            </View>
        );

    };

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={[styles.containerContent, styles.eyeIcon]}>
                    <Ionicons name={'ios-eye'} size={20} color={'black'}/>
                </View>
                {this.renderContent()}
            </ScrollView>
        );
    }
}

const styles = {
    scrollView: {
      marginBottom: 20
    },
    eyeIcon: {
        marginTop: 5,
    },
    title: {
        fontSize: 26,
        marginBottom: 3,
    },
    author: {
        marginTop: 5,
        paddingBottom: 5,
        fontSize: 12,
        opacity: 0.7,
        textTransform: 'uppercase'
    },
    postContent: {
        lineHeight: 20,
    },
    containerContent: {
        marginTop: 3,
        marginHorizontal: 15
    }
};

export default PostDetailsComponent;
