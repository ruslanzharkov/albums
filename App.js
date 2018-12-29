import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/appNavigator';
import { store } from './src/store';

const AppNav = createAppContainer(AppNavigator);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNav/>
            </Provider>
        );
    }
}


export default App;