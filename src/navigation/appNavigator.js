import React from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    AsyncStorage
} from 'react-native';
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
    } else if (routeName === 'AddPost') {
        iconName = 'ios-filing';
    }

    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppBottomNavigatorHome = createBottomTabNavigator({
    Home: PostContainer,
    AddPost: AddPostContainer,
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


const AppBottomNavigatorAuth = createBottomTabNavigator({
    Home: PostContainer,
    SignUp: SignUpContainer,
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
          },
    }
);

const AuthStack = createStackNavigator(
    {
        Home: AppBottomNavigatorAuth,
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
        },
    }
);

class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
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
