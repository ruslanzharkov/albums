import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import PostsContainer from './containers/PostContainer';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  } // make this for correct works!
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostsContainer
  }
});

export default createAppContainer(AppNavigator);