import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import PetMark from '../assets/svgs/PetMark';
import SmallLogo from '../assets/svgs/SmallLogo';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import GradientButton from '../common/GradientButton';
import BackButton from '../components/BackButton';
import PaymentButton from '../components/PaymentButton';
import Lineargradient from '../common/LinearGridient';
import AppBar from '../components/AppBar';

const screenHeight = Dimensions.get('screen').height;
const PaymentMethoad = ({navigation}) => {
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const [isFixed, setisFixed] = useState([
    {id: 1, value: true, name: 'XXXX XXXX XXXX 1234', selected: false},
    {id: 2, value: false, name: 'XXXX XXXX XXXX 1521', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isFixed.map(isFixedItem =>
      isFixedItem.id === item.id
        ? {...isFixedItem, selected: true}
        : {...isFixedItem, selected: false},
    );
    setisFixed(updatedState);
  };

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <AppBar title={'Select Payement Method'} />
      <View style={{backgroundColor: '#ebe8eb'}}>
        <ScrollView
          contentContainerStyle={{minHeight: screenHeight}}
          bounces={false}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                marginTop: 30,
                fontSize: 40,
              }}>
              Total: $XX.XX
            </Text>
            <View
              style={{
                marginTop: 20,
                //alignItems:'center',
                width: '80%',
              }}>
              <View>
                <Text
                  style={{fontSize: 14, color: '#212121', fontWeight: 'bold'}}>
                  Credit / Debit Card
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  padding: 20,
                }}>
                <View>
                  {isFixed.map(item => (
                    <PaymentButton
                      onPress={() => onRadioBtnClick(item)}
                      selected={item.selected}
                      key={item.id}
                      name={item.name}
                    />
                  ))}
                  <Text
                    style={{color: 'black', fontWeight: 'bold', marginTop: 30}}>
                    Other
                  </Text>
                  <PaymentButton name={'Cash after the service'} hideImage={true} />
                </View>
              </View>
              <View style={{marginTop: 30}}>
                <GradientButton
                  text="CONTINUE"
                  onPress={() => navigation.navigate('ScheduleAppointment')}
                />
              </View>
              <View style={{alignItems: 'center', marginTop: 20}}>
                <SmallLogo />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gradient: {
    minHeight: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flex: undefined,
  },
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

export default PaymentMethoad;
