import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Hello!',
    };

    renderContent = () => {
        return (
            <View style={styles.containerContent}>
               <Text>Sign Up screen</Text>
            </View>
        );

    };

    render() {
        return (
            <ScrollView style={styles.scrollView}>
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

export default SignUpScreen;
