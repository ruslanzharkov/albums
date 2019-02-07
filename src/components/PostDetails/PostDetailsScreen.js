import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PostDetailsScreen extends Component {
    static defaultNavigationOptions = {
        title: 'Hello!',
    };

    componentDidMount() {
        this.props.navigation.setParams({
            appBar: {
                title: 'Clientes'
            }
        });
    }

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
            <View>
                <View style={[styles.containerContent, styles.eyeIcon]}>
                    <Ionicons name={'ios-eye'} size={20} color={'black'}/>
                </View>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
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

export default PostDetailsScreen;
