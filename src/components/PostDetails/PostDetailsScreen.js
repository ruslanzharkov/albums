import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PostDetailsScreen extends Component {
    renderContent = () => {
        return (
            <View style={styles.containerContent}>
                <Text style={styles.title}>{this.props.postDetails.title}</Text>
                <Text>{this.props.postDetails.author}</Text>
                <Text>{this.props.postDetails.content}</Text>
            </View>
        );

    };

    render() {
        return (
            <View>
                <View style={styles.containerContent}>
                    <Ionicons name={'ios-eye'} size={20} color={'black'} />
                </View>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    title: {
        fontSize: 26
    },
    containerContent: {
        marginHorizontal: 10
    }
};

export default PostDetailsScreen;
