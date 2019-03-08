import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIconFocus: false
        };
    }


    renderEyeSecureIcon = () => {
        return (
            <Ionicons
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
                name={'ios-eye-off'}
                size={20}
                color="#000"
                onPress={this.props.iconPress}
            />
        );
    };

    renderEyeIcons = () => {
       if (this.state.showIconFocus) {
           if (this.props.isSecure) {
               return this.renderEyeSecureIcon();
           }

           if (this.props.passwordType) {
               return this.renderEyeSecureOffIcon();
           }
       }
    };

    onFocus = () => {
        this.setState({showIconFocus: true});
    };

    onBlur = () => {
        this.setState({showIconFocus: false});
    };

    render() {
        const {
            style,
            onChangeText,
            placeholder,
            isSecure
        } = this.props;

        return (
            <View style={styles.inputWrapper}>
                <TextInput
                    style={[styles.input, style]}
                    secureTextEntry={isSecure}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
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
       width: 20
    },
    input: {
        backgroundColor: '#fff',
        color: '#424242',
    },
});
