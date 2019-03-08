import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../common/Input';
import Button from '../common/Button';

class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Hello!',
    };


    signUp = async () => {

    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.signInContainer}>
                    <View style={styles.signInTextContainer}>
                        <Text style={styles.signInText}>Sign Up</Text>
                    </View>
                    <Input
                        placeholder={'Email'}
                        style={styles.input}
                    />
                    <Input
                        placeholder={'Password'}
                        style={styles.input}
                    />
                    <Button
                        icon={<Ionicons name={'ios-mail'} size={20} color={'#fff'} />}
                        title={'Create account'}
                    />
                </View>
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

export default SignUpScreen;
