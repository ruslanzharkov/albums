import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    constructor(props) {
        super(props);
    }

    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    render() {
        return (
            <View>
                <View>
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
    signUpButton: {
        backgroundColor: "red",
        padding: 20
    }
});

export default SignInScreen;
