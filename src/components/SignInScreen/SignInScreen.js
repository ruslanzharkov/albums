import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            isSecure: true
        };
    }

    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    onChangeEmail = (email) => {
        this.setState({ email });
    };

    onChangePassword = (password) => {
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

    signInUser = async () => {
        if (!this.validateEmail(this.state.email))
            return;

        if (!this.validatePass(this.state.password))
            return;

        const auth = {
            email: this.state.email,
            password: this.state.password
        };
        await this.props.signIn(auth);

        this.props.navigation.navigate('App');
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
                        onChangeText={this.onChangeEmail}
                        style={styles.input}
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

                </View>
                <Button
                    icon={<Ionicons name={'ios-log-in'} size={25} color={'#fff'} />}
                    title={'Log In'}
                    style={styles.button}
                    onPress={this.signInUser}
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
