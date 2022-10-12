import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import PetMark from '../assets/svgs/PetMark';
import Menu from '../assets/svgs/Menu';
import SmallLogo from '../assets/svgs/SmallLogo';
import UserIcon from '../assets/svgs/UserIcon';
import TextInputs from '../components/Input';
import {useTogglePasswordVisibility} from '../hooks/useTogglePasswordVisibility';
import RadioButton from '../components/RadioButton';
import {theme} from '../code/Theme';
import Api from '../api';
import {getDataFrom, handleError} from '../common/Utils';
import {useDispatch, useSelector} from 'react-redux';
import GradientButton from '../common/GradientButton';
import Lineargradient from '../common/LinearGridient';


const screenHeight = Dimensions.get('screen').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const AddPetsForm = ({navigation}) => {
  const [name, setPetName] = useState('');
  const [breed, setPetType] = useState('');
  const [petAge, setPetAge] = useState('');
  const [description, setNotes] = useState('');
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  const [pets, setPets] = useState([]);

  const addHandler = () => {
    const _inputs = [...pets];
    _inputs.push({});
    setPets(_inputs);
  };

  const deleteHandler = key => {
    const _inputs = pets.filter((input, index) => index != key);
    setPets(_inputs);
  };

  const inputHandler = (text, key) => {
    const _inputs = [...pets];
    _inputs[key].value = parseInt(text);
    _inputs[key].key = key;
    setPets(_inputs);
  };

  const updateTitle = (key, value, index) => {
    setPets(items => {
      // items[index] = items[index] || {}
      items[index][key] = value;
      return items;
    });
  };

  const updateItem = (key, value, index) => {
    setPets(items => {
      // items[index] = items[index] || {}
      items[index][key] = parseInt(value);
      return items;
    });
  };

  const updateCheckedItem = (checked, value, index) => {
    setPets(items => {
      // items[index] = items[index] || {}
      items[index].markets = items[index].markets || [];
      if (checked) {
        items[index].markets.push(value);
      } else {
        const i = items[index].markets.findIndex(i => i == value);
        if (i > -1) {
          items[index].markets.splice(i, 1);
        }
      }
      return items;
    });
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [isFixed, setisFixed] = useState([
    {id: 1, value: true, name: 'Yes', selected: false},
    {id: 2, value: false, name: 'No', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isFixed.map(isFixedItem =>
      isFixedItem.id === item.id
        ? {...isFixedItem, selected: true}
        : {...isFixedItem, selected: false},
    );
    setisFixed(updatedState);
  };

  const User = useSelector(state => state.data.user);

  const dispatch = useDispatch();

  const api = new Api(User);

  const newPet = (user) => {
    // TODO: add validations here
    const data = {
      name: name,
      description: description,
      petAge:petAge,
      breed:breed,
      isActive:isFixed,
      gender:"FEMALE",
      color:'black',
      unit_price: 200
    };
    console.log("addpet",data);
    api
      .addPet(data, user)
      .then(response => {
        const respData = getDataFrom(response);
        console.log("respData", response);
        if (respData) {
          //  get required data from `respData`
          dispatch(addPet(respData));
        }
        //else failed, & the result is already handled in getDataFrom()
      })
      .catch(error => {
        // this method parse error & handle all msg display mechanism
        handleError(error);
      });
    // navigation.navigate('MainScreen')
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
        bounces={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginTop: 40,
              width: '90%',
            }}>
            {pets.map((input, key) => (
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: '#ebe8eb',
                  borderRadius: 10,
                  padding: 20,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet's Name
                </Text>
                <TextInputs
                  name="petname"
                  placeholder="Pet's Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={name.value}
                  onChangeText={setPetName}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet's Type
                </Text>
                <TextInputs
                  name="pettype"
                  placeholder="Pet's Type"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={breed.value}
                  onChangeText={setPetType}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet Fixed
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {isFixed.map(item => (
                    <RadioButton
                      onPress={() => onRadioBtnClick(item)}
                      selected={item.selected}
                      key={item.id}>
                      {item.name}
                    </RadioButton>
                  ))}
                </View>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Pet's Age
                </Text>
                <TextInputs
                  name="petAge"
                  placeholder="Pet's Age"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={petAge.value}
                  onChangeText={setPetAge}
                />
                <Text style={{color: 'black', fontWeight: 'bold'}}>Notes</Text>
                <TextInputs
                  style={{
                    backgroundColor: theme.colors.surface,
                    height: 100,
                    justifyContent: 'flex-start',
                    borderStyle: 'solid',
                    fontSize: 15,
                    borderRadius: 10,
                  }}
                  name="notes"
                  placeholder="Notes"
                  autoCapitalize="none"
                  multiline={true}
                  autoCorrect={false}
                  value={description.value}
                  onChangeText={setNotes}
                />
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    style={{borderWidth: 1, borderColor: 'red'}}
                    onPress={() => deleteHandler(key)}>
                    <Text style={{color: 'red', fontSize: 13, padding: 10}}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={addHandler}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginTop: 10,
                    fontSize: 16,
                  }}>
                  + Add a new pet
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <GradientButton
                text="CONTINUE"
                onPress={newPet}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 10}}>
              <SmallLogo />
            </View>
          </View>
        </View>
      </ScrollView>
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
});

export default AddPetsForm;
