import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


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
                    <Text>SignIn Screen</Text>
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={this._goToSignUp}>
                    <Text>SignUp</Text>
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
        backgroundColor: "red",
        padding: 20
    }
});

export default SignInScreen;
