import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class SignInScreen extends Component {
    constructor(props) {
        super(props);
    }

    _goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };

    render() {
        return (
            <View>
                <View >
                    <Text>SignIn Screen</Text>
                </View>
                <TouchableOpacity style={{backgroundColor: "red", padding: 20}} onPress={this._goToSignUp}>
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }

};

export default SignInScreen;
