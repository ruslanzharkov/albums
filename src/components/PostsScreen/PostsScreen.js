import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumList from '../AlbumList';

class PostsScreen extends Component {
  static navigationOptions = { 
    title: 'Home'
  }

  render() {
    return (
      <View>
        <AlbumList />
      </View>
    );
  }
}

export default PostsScreen;
