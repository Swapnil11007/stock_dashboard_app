import React from 'react';
import DrawerNavigator from './allComponents/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './reduxComponents/store';
import { AuthProvider } from './allComponents/AuthContext';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};

export default App;
