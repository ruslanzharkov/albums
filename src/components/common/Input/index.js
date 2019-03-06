import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default Input = (props) => {
  const {
      titleInput,
      style,
      onChangeText,
      placeholder
  } = props;
  return (
      <View style={styles.inputWrapper}>
          <Text>{titleInput}</Text>
          <TextInput
              style={style}
              placeholder={placeholder}
              onChangeText={onChangeText}
          />
      </View>
  );
};

const styles = StyleSheet.create({
   inputWrapper: {
       marginBottom: 20,
       borderBottomColor: '#d8d8d8',
       borderBottomWidth: 1,
   }
});
