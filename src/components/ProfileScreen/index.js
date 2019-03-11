import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import _ from 'lodash';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    renderUserSkeleton = () => {
        return (
            <View style={styles.skeleton}>
                <View style={styles.emptyImage}/>
                <View style={styles.emptyEmail}/>
                <View style={styles.emptyButton}/>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.renderUserSkeleton()}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: '50%',
        flex: 1,
        alignItems: 'center'
    },
    skeleton: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    emptyImage: {
        backgroundColor: '#dbd9d9',
        borderRadius: 100,
        width: 100,
        height: 100
    },
    emptyEmail: {
        marginTop: 20,
        backgroundColor: '#dbd9d9',
        borderRadius: 10,
        width: 170,
        height: 20
    },
    emptyButton: {
        marginTop: 30,
        backgroundColor: '#dbd9d9',
        borderRadius: 10,
        width: 170,
        height: 20
    }
});

export default SignInScreen;
