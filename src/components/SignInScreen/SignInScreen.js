import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            showPassword: false,
            isSecure: true
        };
    }

    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    showPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
            isSecure: !this.state.isSecure,
        });
    };

    onChangeLogin = () => {

    };

    onChangePassword = () => {

    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.signInTextContainer}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </View>
                    <Input
                        placeholder={'Email'}
                        style={styles.input}
                    />
                    <Input
                        placeholder={'Password'}
                        style={styles.inputPassword}
                        isSecure={this.state.isSecure}
                        passwordType={this.state.showPassword}
                        iconPress={this.showPassword}
                    />

                </View>
                <Button
                    icon={<Ionicons name={'ios-log-in'} size={25} color={'#fff'} />}
                    title={'Log In'}
                    style={styles.button}
                />
                <TouchableOpacity style={styles.signUpButton} onPress={this._goToSignUp}>
                    <Text style={styles.signUpText}>Not have an account? Sign Up</Text>
                </TouchableOpacity>
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
    },
    inputPassword: {
        width: 280,
        height: 30
    },
    button: {
        width: 300
    }
});

export default SignInScreen;
