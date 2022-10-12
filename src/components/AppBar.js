import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Lineargradient from '../common/LinearGridient';
import BackIcon from './BackIcon';

const AppBar = ({title}) => {
  const navigation = useNavigation();

  return (
    <Lineargradient style={styles.gradient}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="light-content"
        translucent
      />
      <View style={styles.header}>
        <BackIcon onPress={navigation.goBack} />
        <Text style={{fontSize: 18, color: '#fff', marginLeft: 10}}>
          {title}
        </Text>
      </View>
    </Lineargradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    // height: '12%',
    minHeight: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flex: undefined,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default AppBar;
