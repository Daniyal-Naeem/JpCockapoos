import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ToastAndroid
} from 'react-native';
import PetMark from '../assets/svgs/PetMark';
import InsideLogo from '../assets/svgs/InsideLogo';
import SmallLogo from '../assets/svgs/SmallLogo';
import TextInputs from '../components/Input';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import GradientButton from '../common/GradientButton';
import Lineargradient from '../common/LinearGridient';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';
import {useDispatch, useSelector} from 'react-redux';
import {saveUser} from '../redux/dataSlice';

const screenHeight = Dimensions.get('screen').height;
const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const api = new Api();

  const doLogin = () => {
    // TODO: add validations here
    const data = {
      username: username,
      password: password,
    };
    api
      .login(data)
      .then(response => {
        const respData = getDataFrom(response);
        if (respData) {
          // login success, get required data from `respData`
          respData.name = username;
          respData.password = password;
          dispatch(saveUser(respData));
        }
        showToastWithGravity();
        //else login failed, & the result is already handled in getDataFrom()
      })
      .catch(error => {
        // this method parse error & handle all msg display mechanism
        handleError(error);
      });
    // navigation.navigate('MainScreen')
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Successfully app Login',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
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
              Login to your account
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#FFF',
              }}>
              Enter Username and Password
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
              //alignItems:'center',
              width: '80%',
            }}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Username</Text>
            <TextInputs
              name="username"
              placeholder="Enter Username"
              autoCapitalize="none"
              autoCorrect={false}
              value={username.value}
              onChangeText={setUsername}
            />
            <Text style={{color: 'black', fontWeight: 'bold', marginTop: 20}}>
              Password
            </Text>

            <TextInputs
              name="Password"
              placeholder="Enter Password"
              // underlineColor="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              value={password.value}
              // secureTextEntry={passwordVisibility}
              onChangeText={setPassword}
              showRightIcon={true}
            />

            <View style={{marginTop: 30}}>
              <GradientButton text="LOGIN" onPress={doLogin} />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmScreen')}>
                <Text
                  style={{color: 'black', fontWeight: 'bold', marginTop: 20}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 50}}>
              <SmallLogo />
            </View>
            <View style={{alignItems: 'center', marginTop: 30}}>
              <View style={styles.row}>
                <Text style={{color: 'black'}}>Don’t have an account ? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserRegisterForm')}>
                  <Text style={styles.link}>REGISTER </Text>
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
    minHeight: '35%',
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
});

export default LoginScreen;
