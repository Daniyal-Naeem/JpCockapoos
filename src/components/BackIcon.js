import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BackIcon = ({onPress, color}) => (
  <Icon name="arrowleft" onPress={onPress} color={color || 'white'} size={25} />
);

export default BackIcon;
