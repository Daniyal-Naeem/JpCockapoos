import React, {useEffect} from 'react';
import {Text, View, StatusBar, StyleSheet, Dimensions} from 'react-native';
import Lineargradient from '../common/LinearGridient';
import Background from '../common/Background';
import * as Animatable from 'react-native-animatable';
import Logo from '../assets/svgs/Logo';
import PetMark from '../assets/svgs/PetMark';
import Api from '../api';
import {saveUser} from '../redux/dataSlice';
import { useSelector, useDispatch } from 'react-redux';
import {getDataFrom, handleError} from '../common/Utils';
const windowWidth = Dimensions.get('window').width;

const SplashScreen = ({bootstrapped, dataLoaded}) => {
  const User = useSelector(state => state.data.user);
  const api = new Api();
  const dispatch = useDispatch();
  const doLogin = () => {
    // TODO: add validations here
    const data = {
      username: User.name,
      password: User.password,
    };
    api
      .login(data)
      .then(response => {
        const respData = getDataFrom(response);
        if (respData) {
          // login success, get required data from `respData`
          respData.name = User.name;
          respData.password = User.password;
          dispatch(saveUser(respData));
        }
        //else login failed, & the result is already handled in getDataFrom()
        else{ dispatch (saveUser(undefined))
        }
        dataLoaded(true);
      })
      .catch(error => {
        // this method parse error & handle all msg display mechanism
        handleError(error);
        dispatch (saveUser(undefined));
        dataLoaded(true);
      });
    // navigation.navigate('MainScreen')
  };

  useEffect(() => {

    if (!bootstrapped) {
      return;
    }
    let timer;
    if (User) {
      doLogin()
    }else{

       timer = setTimeout(() => {
        // navigation.reset({index: 0, routes: [{name: 'LoginScreen'}]});
        dataLoaded(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [bootstrapped]);

  return (
    <Lineargradient>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <View style={{position: 'absolute'}}>
        <PetMark />
      </View>
      {/* <Background> */}
      <View style={styles.header}>
        <Text style={styles.text_header1}>WELCOME TO</Text>
        <Text style={styles.text_header}>JP COCKAPOOS</Text>
      </View>
      {/* </Background> */}
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Logo />
        </View>
      </Animatable.View>
    </Lineargradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: '40%',
    width: '100%',
    borderTopStartRadius: windowWidth / 2,
    borderTopEndRadius: windowWidth / 2,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  text_header1: {
    fontSize: 23,
    color: '#fff',
  },
  text_header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  header_paragraph: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
  },
});

export default SplashScreen;
