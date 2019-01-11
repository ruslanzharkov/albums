import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostContainer from '../containers/PostContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';

class IconWithBadge extends React.Component {
    render() {
        const { name, color, size } = this.props;
        return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
                <Ionicons name={name} size={size} color={color} />
                
            </View>
        );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    const IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Home') {
        iconName = 'ios-home';
    } else if (routeName === 'Details') {
        iconName = 'ios-settings';
    }
    
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppNavigator = createBottomTabNavigator({
    Home: { 
        screen: PostContainer,
    },
    Details: {
        screen: PostDetailsContainer,
    }

}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
        activeTintColor: '#ed5e42',
        inactiveTintColor: '#000',
    },
});

export default AppNavigator;
