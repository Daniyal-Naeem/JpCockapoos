//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
const GradientButton = ({text, onPress}) => {
  
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress = {onPress}>
      <LinearGradient
        colors={['#01ADED', '#92288C']}
        style={styles.gradient}
        start={{x: -1, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
      </TouchableOpacity>
      </View>
    );
  
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 10
  },
  button: {
    width: '100%',
    height: 55,
  },
  text: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 16
  }
});

//make this component available to the GradientButton
export default GradientButton;