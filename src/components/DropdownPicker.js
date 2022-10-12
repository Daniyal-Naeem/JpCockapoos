import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownPicker = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 1, value: 1},
    {label: 2, value: 2},
  ]);
  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: 'black', fontWeight: 'bold', marginBottom: 10}}>
        Number of Pets
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{borderColor: '#cfcfcf'}}
      />
    </View>
  );
};

export default DropdownPicker;
