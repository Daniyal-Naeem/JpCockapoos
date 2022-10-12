import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function CalendarComponent() {
  return (
    <View style={styles.container}>
      <Calendar
        date={"2022-10-11"}
        markingType={'period'}
        markedDates={{
          '2022-09-21': {color: '#92288C', textColor: 'white'},
        }}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
