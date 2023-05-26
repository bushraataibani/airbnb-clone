import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  guestList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  ageType: {fontWeight: 'bold', fontSize: 18},
  ageGroup: {fontSize: 16},
  buttonSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    padding: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  guestCount: {
    fontSize: 16,
  },
});

export default styles;
