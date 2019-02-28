import React, { Component } from 'react';
import { View, Text } from 'react-native';


class NotAuthorizedScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View>
                    Sign in
                </View>
                <View>
                    Sign up
                </View>
            </View>
        );
    }

};

export default NotAuthorizedScreen;
