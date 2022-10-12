import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/svgs/Logo')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginTop:-300,
    marginLeft:-10
  },
})