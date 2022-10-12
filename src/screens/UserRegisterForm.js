import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PetMark from '../assets/svgs/PetMark';
import InsideLogo from '../assets/svgs/InsideLogo';
import TextInputs from '../components/Input';
import DropdownPicker from '../components/DropdownPicker';
import GradientButton from '../common/GradientButton';
import {theme} from '../code/Theme';
//import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
const screenHeight = Dimensions.get('screen').height;
import RadioButton from '../components/RadioButton';
import Lineargradient from '../common/LinearGridient';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';
import {useDispatch, useSelector} from 'react-redux';

const UserRegisterForm = ({navigation, selected}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('')
  const [numberofpets, setNumberofpets] = useState('')
  const [petname, setPetname] = useState('')
  const [pettype, setType] = useState('')
  const [petAge, setPetAge] = useState('')
  const [notes, setNotes] = useState('')
         
  // const {passwordVisibility, rightIcon, handlePasswordVisibility} =
  //   useTogglePasswordVisibility();


  const [isFixed, setisFixed] = useState([
    {id: 1, value: true, name: 'Yes', selected: false},
    {id: 2, value: false, name: 'No', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isFixed.map(isFixedItem =>
      isFixedItem.id === item.id
        ? {...isFixedItem, selected: true}
        : {...isFixedItem, selected: false},
    );
    setisFixed(updatedState);
  };

  const dispatch = useDispatch();

  const api = new Api();

  const addUser = () => {
    // TODO: add validations here
    const data = {
      FULL_NAME: firstname,lastname,
      USERNAME: username,
      ENCRYPTED_PWD: password,confirmpassword,
      numberofpets: 2,
      petname: petname,
      pettype:pettype,
      IS_ACTIVE: isFixed,
      petAge: petAge,
      DESCRIPTION: notes,
      DESIGNATION: 'AD',
      EMAIL_ADDRESS: "babar_ali0@hotmail.com",
      EMP_NO:1,
      LOCATION: "Pakistan",
      COMPANY:'TW',
      U_ROLE_ID:1,
      STATUS:1,
      i:"NOTHING"
    };
    api
      .addUser(data)
      .then(response => {
        const respData = getDataFrom(response);
        if (respData) {
          // register success, get required data from `respData`
          dispatch(addUser(respData));
        }
        //else register failed, & the result is already handled in getDataFrom()
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
      <Lineargradient style={styles.gradient}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'transparent'}
          translucent
        />
        <View style={{position: 'absolute'}}>
          <PetMark />
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <InsideLogo />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              Register your account
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#FFF',
              }}>
              Enter Basic Details
            </Text>
          </View>
        </View>
      </Lineargradient>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginTop: 20,
              width: '80%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  First Name
                </Text>
                <TextInputs
                  placeholder="First Name"
                  returnKeyType="next"
                  onChangeText={setFirstname}
                />
              </View>
              <View style={{width: '47%', marginLeft: 10}}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Last Name
                </Text>
                <TextInputs
                  placeholder="Last Name"
                  returnKeyType="next"
                  onChangeText={setLastname}
                />
              </View>
            </View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Username</Text>
            <TextInputs
              name="username"
              placeholder="Enter Username"
              autoCapitalize="none"
              autoCorrect={false}
              value={username.value}
              onChangeText={setUsername}
            />
            <Text style={{color: 'black', fontWeight: 'bold'}}>Password</Text>
            <TextInputs
              name="Password"
              placeholder="Enter Password"
              autoCapitalize="none"
              autoCorrect={false}
              value={password.value}
              onChangeText={setPassword}
              showRightIcon={true}
            />
            {/* <TouchableOpacity onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={22} color="#232323" />
        </TouchableOpacity> */}
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Confirm Password
            </Text>
            <TextInputs
              name="confirmpassword"
              placeholder="Enter Password"
              // underlineColor="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              value={confirmpassword.value}
              // secureTextEntry={passwordVisibility}
              onChangeText={setConfirmpassword}
              showRightIcon={true}
            />
            {/* <TouchableOpacity onPress={handlePasswordVisibility}>
          <Icon name={rightIcon} size={22} color="#232323" />
        </TouchableOpacity> */}
            <DropdownPicker 
             navigation={navigation}
             onSelect={setNumberofpets}
            />

            <View
              style={{
                marginTop: 10,
                backgroundColor: '#ebe8eb',
                borderRadius: 10,
                padding: 10,
              }}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Pet's Name
              </Text>
              <TextInputs
                name="petname"
                placeholder="Pet's Name"
                autoCapitalize="none"
                autoCorrect={false}
                value={username.value}
                onChangeText={setPetname}
              />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Pet's Type
              </Text>
              <TextInputs
                name="pettype"
                placeholder="Pet's Type"
                autoCapitalize="none"
                autoCorrect={false}
                value={pettype.value}
                onChangeText={setType}
              />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Pet Fixed
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {isFixed.map(item => (
                  <RadioButton
                    onPress={() => onRadioBtnClick(item)}
                    selected={item.selected}
                    key={item.id}>
                    {item.name}
                  </RadioButton>
                ))}
              </View>
              <Text style={{color: 'black', fontWeight: 'bold', marginTop: 10}}>
                Pet's Age
              </Text>
              <TextInputs
                name="petAge"
                placeholder="Pet's Age"
                autoCapitalize="none"
                autoCorrect={false}
                value={petAge.value}
                onChangeText={setPetAge}
              />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Notes</Text>
              <TextInputs
                style={{
                  backgroundColor: theme.colors.surface,
                  height: 100,
                  justifyContent: 'flex-start',
                  borderStyle: 'solid',
                  fontSize: 15,
                  borderRadius: 10,
                }}
                name="notes"
                placeholder="Notes"
                autoCapitalize="none"
                multiline={true}
                autoCorrect={false}
                value={notes.value}
                onChangeText={setNotes}
              />
            </View>
            <View style={{marginTop: 30}}>
              <GradientButton text="REGISTER" onPress={addUser} />
            </View>
            <View
              style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
              <View style={styles.row}>
                <Text style={{color: 'black'}}>Already have an account ? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.link}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  gradient: {
    height: '35%',
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
    fontSize: 15,
  },
});

export default UserRegisterForm;
