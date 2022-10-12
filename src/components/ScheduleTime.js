import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScheduleTime = () => {
  const [appoinTime, setAppoinTime] = useState(false);

  const timeData = [
    {
      id: 1,
      time: '9:30 am',
    },
    {
      id: 2,
      time: '10:30 am',
    },
    {
      id: 3,
      time: '11:30 am',
    },
    {
      id: 4,
      time: '12:30 pm',
    },
  ];

  const renderItem = item => {
    return (
      <View style={{padding: 10, width: '50%'}}>
        <TouchableOpacity onPress={() => setAppoinTime(!appoinTime)}>
          <View
            style={{
              // width: 145,
              flex: 1,
              height: 45,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#d3d3d3',
              borderColor: appoinTime ? '#92288C' : '#d3d3d3',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingHorizontal: 10,
              backgroundColor: appoinTime ? '#fff' : '#efefef',
            }}>
            <Text
              style={{
                color: appoinTime ? '#92288C' : '#000',
                fontSize: 14,
                fontWeight: 'bold',
                flex: 1,
              }}>
              {item.time}
            </Text>
            <View>
              <Icon
                name={appoinTime ? 'check-circle' : 'radio-button-unchecked'}
                size={20}
                color={appoinTime ? '#92288C' : '#d3d3d3'}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
      }}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Available Slots
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {timeData.map(renderItem)}
        {/* <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{padding: 20, paddingBottom: 100}}
    data={timeData}
    renderItem={renderItem}
    keyExtractor={item => `item-${item.id}`}
    enableEmptySections={true}
    /> */}
      </View>
    </View>
  );
};

export default ScheduleTime;
