import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
//import MainScreen from '../screens/MainScreen';
//import ServiceList from '../screens/ServiceList';
//import ConfirmationScreen from '../screens/ConfirmationScreen'
//import ScheduleAppointmentScreen from '../screens/ScheduleAppointmentScreen'
//import AddPetForm from '../screens/AddPetForm'
//import PaymentMethoad from '../screens/PaymentMethoad'


const Stack = createStackNavigator()


 const HomeNavigation = ({navigation}) => {

  return (

    <Stack.Navigator
    initialRouteName="MainScreen"
    screenOptions={{headerShown: false}}
    >
      {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      {/* <Stack.Screen name="ServiceList" component={ServiceList} /> */}
      {/* <Stack.Screen name="AddPetForm" component={AddPetForm} /> */}
      {/* <Stack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen} /> */}
      {/* <Stack.Screen name="PaymentMethoad" component={PaymentMethoad} /> */}
      {/* <Stack.Screen name="ConfirmScreen" component={ConfirmationScreen} /> */}
    </Stack.Navigator>

  )
}
export default HomeNavigation;