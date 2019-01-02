import { createBottomTabNavigator } from 'react-navigation';
import PostContainer from '../containers/PostContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';

const AppNavigator = createBottomTabNavigator({
    Main: { 
        screen: PostContainer,
        navigationOptions: {
            title: 'Home'
        }
    },
    Details: {
        screen: PostDetailsContainer,
        navigationOptions: {
            title: 'Details'
        }
    }

}, {
    initialRouteName: 'Main',

});

export default AppNavigator;
