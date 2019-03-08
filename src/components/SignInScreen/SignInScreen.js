import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import Input from '../common/Input';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }


    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    onChangeLogin = () => {

    };

    onChangePassword = () => {

    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.signInContainer}>
                    <View style={styles.signInTextContainer}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </View>
                    <Input
                        placeholder={'Email'}
                        style={styles.input}
                    />
                    <Input
                        placeholder={'Password'}
                        style={styles.input}
                    />

                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={this._goToSignUp}>
                    <Text style={styles.signUpText}>Not have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: '50%',
        flex: 1,
        alignItems: 'center'
    },
    signInContainer: {
      marginBottom: 20,
    },
    signUpButton: {
        color: '#fff',
        borderRadius: 10,
        padding: 20
    },
    signInTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signInText: {
        fontSize: 30
    },
    signUpText: {
        color: '#ed5e42'
    },
    input: {
        width: 300,
        height: 30
    }
});

export default SignInScreen;
