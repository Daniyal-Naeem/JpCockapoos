import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {Color} from '../code/Theme';
import {SafeAreaView} from 'react-native-safe-area-context';

const Lineargradient = ({children, style}) => {
  return (
    <LinearGradient
      colors={[Color.Blue, Color.Magenta]}
      style={[styles.gradient, style]}
      start={{x: -1, y: 0}}
      end={{x: 1, y: 0}}>
      <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 1,
  },
});
export default Lineargradient;
