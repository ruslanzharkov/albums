import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {

    renderEyeSecureIcon = () => {
        return (
            <Ionicons
                style={styles.eyeIcon}
                name={'ios-eye'}
                size={20}
                color="#000"
                onPress={this.props.iconPress}
            />
        );
    };


    renderEyeSecureOffIcon = () => {
        return (
            <Ionicons
                style={styles.eyeIcon}
                name={'ios-eye-off'}
                size={20}
                color="#000"
                onPress={this.props.iconPress}
            />
        );
    };

    renderEyeIcons = () => {
        if (this.props.isSecure) {
            return this.renderEyeSecureIcon();
        }

        if (this.props.passwordType) {
            return this.renderEyeSecureOffIcon();
        }
    };

    render() {
        const {
            style,
            onChangeText,
            placeholder,
            isSecure,
            passwordType,
            iconPress
        } = this.props;

        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, style]}
                    secureTextEntry={isSecure}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                />
                {this.renderEyeIcons()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
   inputWrapper: {
       marginBottom: 20,
       borderBottomColor: '#d8d8d8',
       borderBottomWidth: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#fff',
   },
    eyeIcon: {
    },
    input: {
        backgroundColor: '#fff',
        color: '#424242',
    },
});
