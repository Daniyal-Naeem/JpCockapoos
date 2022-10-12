import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentButton({onPress, selected, hideImage, name}) {
  return (
    <TouchableOpacity style={styles.ButtonContainer}>
      {!hideImage && (
        <Image
          style={styles.image}
          source={require('../assets/mastercard.png')}
        />
      )}
      <View style={{alignItems: 'flex-start', fontSize: 14}}>
        <Text>{name}</Text>
      </View>

      <Icon
        name={selected ? 'check-circle' : 'radio-button-unchecked'}
        size={25}
        color={selected ? '#92288C' : '#d3d3d3'}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  ButtonContainer: {
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: 'gray',
    borderColor1: 'purple',
  },
  Button: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginLeft: 50,
  },
  radioButtonIcon: {
    height: 24,
    width: 24,
    borderRadius: 10,
    backgroundColor: 'purple',
  },
  radioButtonBorder: {
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: 'gray',
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 5,
  },
});
