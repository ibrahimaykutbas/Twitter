import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    minHeight: 85,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 10,
    borderTopWidth: 0.33,
    borderColor: '#CED5DC',
    backgroundColor: '#FFFFFF',
  },
  activeInnerContainer: {
    flexDirection: 'row',
    minHeight: 85,
    paddingLeft: 20,
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: '#CED5DC',
    backgroundColor: '#F3F9FE',
  },
  profileIcon: {
    marginRight: 5,
  },
  content: {
    flex: 1,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  username: {
    color: '#687684',
    fontSize: 16,
  },
  messageText: {
    color: '#687684',
    fontSize: 16,
  },
  date: {
    color: '#687684',
    fontSize: 16,
    marginRight: 20,
  },
});
