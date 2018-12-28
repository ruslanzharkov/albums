import { createStackNavigator } from 'react-navigation';
import PostContainer from '../containers/PostContainer';

const AppNavigator = createStackNavigator({
    Main: { 
        screen: PostContainer,
        navigationOptions: {
            title: 'Home'
        }
    },
}, {
    initialRouteName: 'Main',

});

export default AppNavigator;
