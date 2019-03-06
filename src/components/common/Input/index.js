import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default Input = (props) => {
  const {
      titleInput,
      styles,
      onChangeText,
      placeholder
  } = props;
  return (
      <View>
          <Text>{titleInput}</Text>
          <TextInput
              style={styles}
              placeholder={placeholder}
              onChangeText={onChangeText}
          />
      </View>
  );
}
