import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import PetMark from '../assets/svgs/PetMark';
import SmallLogo from '../assets/svgs/SmallLogo';
import UserIcon from '../assets/svgs/UserIcon';
import GradientButton from '../common/GradientButton';
import BackIcon from '../components/BackIcon';
import Lineargradient from '../common/LinearGridient';
const screenHeight = Dimensions.get('screen').height;

const MainScreen = ({navigation}) => {

  const [otis, setChecked] = useState(false);
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <Lineargradient style={styles.gradient}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
        <View style={{position: 'absolute'}}>
          <PetMark />
        </View>
        <View style={{marginTop: 20}}>
       
          <BackIcon onPress={navigation.goBack} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            width: '100%',
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: '#FFF',
                fontWeight: 'bold',
                alignItems: 'flex-start',
              }}>
              Hi, Stella Parker
            </Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end', marginTop: -65}}>
            <UserIcon />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#FFF',
              marginTop: 10,
            }}>
            Choose your precious pet(s).
          </Text>
        </View>
      </Lineargradient>
      <ScrollView
        contentContainerStyle={{minHeight: screenHeight}}
        bounces={false}>
         
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginTop: 40,
              width: '80%',
            }}>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={() => setChecked(true)}
                style={styles.boxWrapper}>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: otis ? '#92288C' : 'transparent',
                    },
                  ]}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginLeft: 10,
                }}>
                Milo (cat)
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity
                onPress={() => setChecked(false)}
                style={styles.boxWrapper}>
                <View
                  style={[
                    styles.box,
                    {
                      backgroundColor: !otis ? '#92288C' : 'transparent',
                    },
                  ]}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                  marginLeft: 10,
                }}>
                Otis (dog)
              </Text>
            </View>
            <View style={{marginTop: 100}}>
              <GradientButton
                text="CONTINUE"
                onPress={() => navigation.navigate('ServiceList')}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddPetForm')}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 20,
                    fontSize: 16,
                  }}>
                  Add a new pet
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 50}}>
              <SmallLogo />
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  boxWrapper: {
    padding: 3,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  box: {
    width: 20,
    height: 30,
  },
  gradient: {
    height: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flex: undefined,
  },
});

export default MainScreen;
