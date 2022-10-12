import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import UserRegisterForm from '../screens/UserRegisterForm';
import MainScreen from '../screens/MainScreen';
import AddPetForm from '../screens/AddPetForm';
import ServiceList from '../screens/ServiceList';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import PaymentMethoad from '../screens/PaymentMethoad';
import ScheduleAppointmentScreen from '../screens/ScheduleAppointmentScreen';

const Stack = createStackNavigator();

const AuthNavigation = ({navigation}) => {
  const User = useSelector(state => state.data.user);
  console.log("User", User);
  return (
    <Stack.Navigator
      // initialRouteName="PaymentMethoad"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      {!User ? (
        <>
     
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="UserRegisterForm" component={UserRegisterForm} />

        </>
      ) : (
        
        <Stack.Screen name="MainScreen" component={MainScreen} />
      )}
      <Stack.Screen name="ServiceList" component={ServiceList} />
      <Stack.Screen name="AddPetForm" component={AddPetForm} />
      <Stack.Screen name="PaymentMethoad" component={PaymentMethoad} />
      <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen}/>
      <Stack.Screen name="ConfirmScreen" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
