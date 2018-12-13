import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
