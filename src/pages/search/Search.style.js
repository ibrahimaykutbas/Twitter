import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECF0',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 10,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 32,
    width: 286,
    backgroundColor: '#E7ECF0',
    borderRadius: 16,
    padding: 1,
    paddingLeft: 10,
  },
  cancel: {
    color: '#4C9EEB',
    fontSize: 17,
    marginRight: 20,
  },
  header: {
    borderBottomWidth: 0.5,
    borderColor: '#CED5DC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 13,
    fontWeight: 'bold',
    color: '#687684',
    fontSize: 19,
  },
  closeButton: {
    marginRight: 26,
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    height: 175,
  },
  users: {
    marginLeft: 21,
    flexDirection: 'row',
  },
  user: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 5,
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    fontSize: 14,
    paddingRight: 2,
  },
  username: {
    color: '#687684',
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 0.5,
    borderColor: '#CED5DC',
  },
  searched: {
    marginLeft: 21,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
  },
  searchedName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
});
