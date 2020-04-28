import { Provider } from 'react-redux';
import React, { Component } from 'react';
import App from './App';
import store from '@store';
import AppNavigator from './config/router/AppNavigator';

class AppMain extends Component {
  UNSAFE_componentWillMount() {
    // Orientation.unlockAllOrientations();
  }
  componentDidMount() { }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default AppMain;
