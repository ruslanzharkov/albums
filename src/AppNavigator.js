import {
    createStackNavigator,
  } from 'react-navigation';
  import {
    createStore,
    applyMiddleware,
    combineReducers,
  } from 'redux';
  import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
  import { Provider, connect } from 'react-redux';
  import React, { Component } from 'react';

import PostContainer from './containers/PostContainer';

const AppNavigator = createStackNavigator({
    Home: {
      screen: PostContainer,
    }
  }, {
      initialRouteName: 'Home',
  });
  
const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);
 
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
