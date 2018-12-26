import { createStackNavigator, createAppContainer, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import PostContainer from './containers/PostContainer';

const AppNavigator = createStackNavigator({
    Home: {
      screen: PostContainer,
    }
  }, {
      initialRouteName: 'Home',
  });

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);