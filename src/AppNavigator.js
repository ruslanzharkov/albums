import React from 'react';
import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from './navigation/appNavigator';
  
const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);
