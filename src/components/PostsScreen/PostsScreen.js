import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../common/Header';
import AlbumList from '../AlbumList';


export default class PostsScreen extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
});
