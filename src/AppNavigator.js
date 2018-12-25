import React from 'react';
import {  
    createStackNavigator, createAppContainer
} from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import PostContainer from './containers/PostContainer';

const AppNavigator = createStackNavigator({
    Home: {
      screen: PostContainer,
    }
  }, {
      initialRouteName: 'Home',
  });
  

  const AppContainer = createAppContainer(AppNavigator);

  // Now AppContainer is the main component for React to render
  
  export default AppContainer;


