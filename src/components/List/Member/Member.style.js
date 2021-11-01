import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECF0',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginHorizontal: 29,
  },
  text: {
    marginTop: 10,
    color: '#687684',
    fontSize: 16,
  },
  buttonContainer: {
    width: 110,
    height: 30,
    backgroundColor: '#4C9EEB',
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    height: 100,
    borderTopWidth: 0.33,
    borderColor: '#CED5DC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    marginLeft: 15,
  },
  name: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subject: {
    color: 'black',
    fontSize: 19,
  },
  member: {
    fontSize: 14,
    color: '#687684',
  },
  image: {
    marginRight: 15,
  },
});
