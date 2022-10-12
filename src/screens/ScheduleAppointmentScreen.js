import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import GradientButton from '../common/GradientButton';
import TextInputs from '../components/Input';
import {RadioButton} from 'react-native-paper';
import {theme} from '../code/Theme';
import DropdownPicker from '../components/DropdownPicker';
import CalendarComponent from '../components/Calendar';
import ScheduleTime from '../components/ScheduleTime';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';
import {useDispatch, useSelector} from 'react-redux';

import AppBar from '../components/AppBar';

const screenHeight = Dimensions.get('screen').height;

const ScheduleAppointmentScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [checked, setChecked] = useState('Yes');

  const User = useSelector(state => state.data.user);

  const dispatch = useDispatch();

  const api = new Api(User);

  const newAppointment = (user) => {
    // TODO: add validations here
    const data = {
      p_id: 2,
      service_id: 1,
      time_slot: "10:00 AM",
      appointment_date: "2022-09-29"
    };
    console.log("addpet",data);
    api
      .addPet(data, user)
      .then(response => {
        const respData = getDataFrom(response);
        console.log("respData", response);
        if (respData) {
          //  get required data from `respData`
          dispatch(addPet(respData));
        }
        //else failed, & the result is already handled in getDataFrom()
      })
      .catch(error => {
        // this method parse error & handle all msg display mechanism
        handleError(error);
      });
    // navigation.navigate('MainScreen')
  };

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      {/* TODO: export this component as Header.js */}
      <AppBar title={'Schedule Appointment'} />
      <View style={{backgroundColor: '#ebe8eb', flex: 1}}>
        <ScrollView
          contentContainerStyle={{minHeight: screenHeight}}
          bounces={false}>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginTop: 20,
                //alignItems:'center',
                width: '80%',
              }}>
              <View>
                <CalendarComponent />
              </View>
              <View>
                <ScheduleTime />
              </View>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: 20,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet Details
                </Text>
                <DropdownPicker />
                <Text
                  style={{color: 'black', fontWeight: 'bold', marginTop: 10}}>
                  Pet's Name
                </Text>
                <TextInputs
                  name="name"
                  placeholder="Pet's Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={name.value}
                  onChangeText={setname}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet's Type
                </Text>
                <TextInputs
                  name="tyoe"
                  placeholder="Pet's Type"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={breed.value}
                  onChangeText={setBreed}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet Fixed
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton
                    value="Yes"
                    status={checked === 'Yes' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Yes')}
                    color="#92288C"
                  />
                  {checked === 'Yes' ? (
                    <Text style={{fontWeight: 'bold'}}>Yes</Text>
                  ) : (
                    <Text>Yes</Text>
                  )}
                  <RadioButton
                    value="No"
                    status={checked === 'No' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('No')}
                    color="#92288C"
                  />
                  {checked === 'No' ? (
                    <Text style={{fontWeight: 'bold'}}>No</Text>
                  ) : (
                    <Text>No</Text>
                  )}
                </View>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet's Age
                </Text>
                <TextInputs
                  name="petAge"
                  placeholder="Pet's Age"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={username.value}
                  onChangeText={text => setUsername(text)}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>Notes</Text>
                <TextInputs
                  style={{
                    backgroundColor: theme.colors.surface,
                    height: 100,
                    justifyContent: 'flex-start',
                    // borderWidth: 1,
                    // borderStyle: 'solid',
                    fontSize: 15,
                    borderRadius: 10,
                  }}
                  name="notes"
                  placeholder="Notes"
                  autoCapitalize="none"
                  multiline={true}
                  autoCorrect={false}
                  value={username.value}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View style={{marginTop: 10, marginBottom: 20}}>
                <GradientButton
                  text="CONTINUE"
                  onPress={newAppointment}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#01ADED',
    fontSize: 16,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -120,
  },
});

export default ScheduleAppointmentScreen;
