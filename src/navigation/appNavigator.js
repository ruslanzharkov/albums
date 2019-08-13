import React from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar,
    StyleSheet
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostContainer from '../containers/PostContainer';
import AddPostContainer from '../containers/AddPostContainer';
import PostDetailsContainer from '../containers/PostDetailsContainer';
import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';
import ProfileContainer from '../containers/ProfileContainer';

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    const IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Home') {
        iconName = 'ios-home';
    }

    if (routeName === 'SignIn') {
        iconName = 'ios-people';
    }

    if (routeName === 'Add Post') {
        iconName = 'ios-list-box';
    }

    if (routeName === 'Profile') {
        iconName = 'ios-contact';
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppBottomNavigatorHome = createBottomTabNavigator({
    Home: PostContainer,
    'Add Post': AddPostContainer,
    Profile: ProfileContainer,
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
        activeTintColor: '#ed5e42',
        inactiveTintColor: '#313742',
    },
});


const AppBottomNavigatorAuth = createBottomTabNavigator({
    Home: PostContainer,
    SignIn: SignInContainer
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

const AppStack = createStackNavigator(
    {
        Home: AppBottomNavigatorHome,
        Details: PostDetailsContainer,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ed5e42',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            title: 'Albums'
        },
    }
);

const AuthStack = createStackNavigator(
    {
        Home: AppBottomNavigatorAuth,
        Details: PostDetailsContainer,
        SignUp: SignUpContainer
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ed5e42',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            title: 'Albums'
        },
    }
);

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
