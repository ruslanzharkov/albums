import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
    const { textStyle } = styles;

    return (<Text style={textStyle}>Albums</Text>);
};

const styles = {
    textStyle: {
        fontSize: 20
    }
};

export default Header;