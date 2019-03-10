import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../common/Input';
import Button from '../common/Button';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            isSecure: true
        };
    }

    onChangeEmail = (email) => {
        this.setState({ email });
    };

    onChangePassword = (password) => {
        console.log(password)
        this.setState({ password });
    };

    showPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
            isSecure: !this.state.isSecure,
        });
    };

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validatePass = (password) => {
      return password.length > 4;
    };

    signUpUser = async () => {
        if (!this.validateEmail(this.state.email))
            return;

        if (!this.validatePass(this.state.password))
            return;

        const auth = {
            email: this.state.email,
            password: this.state.password
        };
        await this.props.signUp(auth);

        this.props.navigation.navigate('App');
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
                        onChangeText={this.onChangeEmail}
                    />
                    <Input
                        placeholder={'Password'}
                        style={styles.inputPassword}
                        onChangeText={this.onChangePassword}
                        value={this.state.password}
                        isSecure={this.state.isSecure}
                        passwordType={this.state.showPassword}
                        iconPress={this.showPassword}
                    />
                    <Button
                        icon={<Ionicons name={'ios-rocket'} size={25} color={'#fff'} />}
                        title={'Create account'}
                        style={styles.button}
                        onPress={this.signUpUser}
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
    },
    inputPassword: {
        width: 280,
        height: 30
    },
    button: {
        width: 300
    }
});

export default SignUpScreen;
