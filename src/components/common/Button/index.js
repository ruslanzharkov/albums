import React from  'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export default Button = (props) => {
    const {
        icon,
        title
    } = props;

    return (
        <TouchableOpacity style={styles.signUpTouchable}>
            <Text style={styles.touchableText}>{title}</Text>
            <View style={styles.icon}>
                {icon}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableText: {
        color: '#ffffff',
        padding: 15,
    },
    signUpTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#0466b3',
    },
    icon: {
        marginLeft: 5,
        color: '#ffffff',
    }
});
