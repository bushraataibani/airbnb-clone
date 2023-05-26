import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  searchInput: {
    fontSize: 18,
    marginBottom: 20,
  },
  destinationList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    gap: 15,
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
  },
  description: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
