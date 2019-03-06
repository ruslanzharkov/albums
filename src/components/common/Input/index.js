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
       borderBottomColor: '#757575',
       borderBottomWidth: 1,
   }
});
