import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../commonComponent/Button';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getCurrentUser();
    }

    userSkeleton = () => {
        return (
            <View style={styles.skeleton}>
                <View style={styles.emptyImage}/>
                <View style={styles.emptyEmail}/>
                <View style={styles.emptyButton}/>
            </View>
        );
    };

    userInfo = () => {
        return (
            <View style={styles.skeleton}>
                <View style={styles.emptyImage}/>
                <View>
                    <Text>{this.props.currentUser.displayName}</Text>
                </View>
                <View style={styles.email}>
                    <Text>{this.props.currentUser.email}</Text>
                </View>
                <Button
                    style={styles.button}
                    icon={<Ionicons name={'ios-log-out'} size={25} color={'#fff'} />}
                    onPress={this.userLogout}
                >
                    Logout
                </Button>
            </View>
        );
    };

    userLogout = async () => {
        await this.props.logoutFromApp();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                {
                    _.isEmpty(this.props.currentUser) ?
                        this.userSkeleton() :
                        this.userInfo()
                }
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
    },
    button: {
        width: 200,
    },
    email: {
        marginTop: 5,
        marginBottom: 4
    }
});

export default SignInScreen;
