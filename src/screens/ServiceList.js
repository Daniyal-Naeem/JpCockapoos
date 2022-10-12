import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator
} from 'react-native';
import PetMark from '../assets/svgs/PetMark';
import Menu from '../assets/svgs/Menu';
import UserIcon from '../assets/svgs/UserIcon';
import Lineargradient from '../common/LinearGridient';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';
import Constants from '../common/Constants';
import { Color } from '../code/Theme';

const ServiceList = ({navigation}) => {

  const[serviceList, setServiceList] = useState('');

  const User = useSelector(state => state.data.user);
 

  const dispatch = useDispatch();

  const api = new Api(User);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
     setLoading(true);
    api.getServices()
   .then(response =>{
    const respData = getDataFrom(response);
    if (respData) {
console.log("resp", respData);
      // success, get required data from `respData`
     setServiceList(respData.data)
    }
    setLoading(false);
    //else getService failed, & the result is already handled in getDataFrom()
  })
  .catch(error => {
    // this method parse error & handle all msg display mechanism
    handleError(error);
  });
   },[])
  
  
  
  const ListItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('ScheduleAppointment', {id: item.id})
        }>
        <View style={styles.listItem}>
          <View style={{flexDirection: 'row'}}>
            <View>
              {/* <Image
                source={require('../assets/list.png')}
                style={{
                  width: 60,
                  height: 60,
                }}></Image> */}
              <View style={{
                 marginLeft: 10,
                width: 60,
                  height: 60,
                  backgroundColor: Color.Magenta,
                  borderRadius: 30}}>
                <Image source={{uri: Constants.BASE_URL + item.ICON}} />
              </View>
            </View>
            <View style={{margin: 8, flex: 1}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  color: '#212121',
                }}>
                {item.TITLE}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 78, marginTop:-35}}>
            <Text>{item.DESCRIPTION}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.btnfooter}></View>
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
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
        <View style={{position: 'absolute'}}>
          <PetMark />
        </View>
        <View style={{marginTop: 40}}>
          <Menu />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
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
            Book the service for your precious pet(s).
          </Text>
        </View>
      </Lineargradient>
      {loading ? (
            <ActivityIndicator size="large" color= {Color.Magenta} style={{marginTop:350,marginLeft: 8}} />
          ) 
          :
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding: 20, paddingBottom: 100}}
          data={serviceList}
          renderItem={ListItem}
          keyExtractor={item => `item-${item.id}`}
          enableEmptySections={true}
          ListFooterComponent={renderFooter}
        />
      </View>
}
    </View>
  );
};
const styles = StyleSheet.create({
  gradient: {
    height: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
    flex: undefined,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#F6ECF6',
    elevation: 2,
    borderRadius: 10,
    height: 170,
  },
  btnfooter: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const serviceList = [
//   {
//     id: 1,
//     title: 'Dog Walking',
//     description:
//       'Too busy to take your pup on a much needed long walk? Dont worry, wehave you covered. Give us a call and we can schedule a walk with your best friend!',
//     imageName: require('../assets/petwalking.png'),
//   },
//   {
//     id: 2,
//     title: 'Pet Sitting',
//     description:
//       'Going to be at work for hours and worried your pup will be too lonely? Give us a call and we can schedule the day(s) and time(s) we can pet sit for you.',
//     imageName: require('../assets/petsitting.png'),
//   },
//   {
//     id: 3,
//     title: 'Pet Daycare',
//     description:
//       'Too busy to take your pup on a much needed long walk? Dont worry, wehave you covered. Give us a call and we can schedule a walk with your best friend!',
//     imageName: require('../assets/petdaycare.png'),
//   },
//   {
//     id: 4,
//     title: 'Pet Appointments',
//     description:
//       'Too busy to take your pup on a much needed long walk? Dont worry, wehave you covered. Give us a call and we can schedule a walk with your best friend!',
//     imageName: require('../assets/petappointments.png'),
//   },
//   {
//     id: 4,
//     title: 'Pet Appointments',
//     description:
//       'Too busy to take your pup on a much needed long walk? Dont worry, wehave you covered. Give us a call and we can schedule a walk with your best friend!',
//     imageName: require('../assets/petappointments.png'),
//   },
// ];

export default ServiceList;
