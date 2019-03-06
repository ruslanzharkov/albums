import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Input from '../common/Input';

class SignInScreen extends Component {
    constructor(props) {
        super(props);
    }

    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.signInContainer}>
                    <Text>Sign In to App</Text>
                    <Input
                        titleInput={'Email'}
                        style={styles.input}
                    />
                    <Input
                        titleInput={'Password'}
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
    signUpText: {
        color: '#ed5e42'
    },
    input: {
        width: 300,
        height: 30
    }
});

export default SignInScreen;
