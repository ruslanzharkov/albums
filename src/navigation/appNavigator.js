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
import SignInContainer from '../containers/SignInContainer';

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
    } else if (routeName === 'SignIn') {
        iconName = 'ios-people';
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
    SignIn: SignInContainer
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
        // title: navigation.params.s
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
