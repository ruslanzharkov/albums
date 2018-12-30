import { createStackNavigator } from 'react-navigation';
import PostContainer from '../containers/PostContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';

const AppNavigator = createStackNavigator({
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
