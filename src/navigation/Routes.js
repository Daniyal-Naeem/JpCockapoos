import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import HomeNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import store, { persistor } from '../redux/store';

const Routes = () => {
  const [dataLoaded, setDataLoaded] = React.useState(false);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {bootstrapped =>
          dataLoaded ? (
            <NavigationContainer>
              <AuthNavigation />
            </NavigationContainer>
          ) : (
            <SplashScreen
              dataLoaded={setDataLoaded}
              bootstrapped={bootstrapped}
            />
          )
        }
      </PersistGate>
    </Provider>
  );
};

export default Routes;
