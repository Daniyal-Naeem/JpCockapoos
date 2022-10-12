import React, {useEffect} from 'react';
import {Text, View, StatusBar, StyleSheet, Dimensions} from 'react-native';
import Lineargradient from '../common/LinearGridient';
import PetMark from '../assets/svgs/PetMark';
import ConfirmationLogo from '../assets/svgs/ConfirmationLogo';
const windowWidth = Dimensions.get('window').width;

const ConfirmationScreen = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'LoginScreen' }] }); 
    }, 3000);
    return () => clearTimeout(timer);
}, []);

  return (
    <Lineargradient>
      <StatusBar hidden={true} />
      <View style={{position: 'absolute'}}>
        <PetMark />
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>THANK YOU FOR BOOKING WITH</Text>
      <ConfirmationLogo/>
      </View>
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
  },
 
  text_header: {
    fontSize: 23,
    marginBottom: 20,
    color: '#fff',
  },
});

export default ConfirmationScreen;
