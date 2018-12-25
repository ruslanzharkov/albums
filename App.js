import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import AppNavigator from './src/AppNavigator';

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
  } 
}

export default App;