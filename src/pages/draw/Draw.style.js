import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    marginTop: 10,
    marginLeft: 15,
    flex: 1,
  },
  name: {
    marginTop: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 15,
    color: '#687684',
  },
  statistics: {
    flexDirection: 'row',
    marginTop: 10,
  },
  following: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    fontSize: 16,
  },
  followingText: {
    marginRight: 20,
    color: '#687684',
    fontSize: 16,
  },
  followers: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    fontSize: 16,
  },
  followersText: {
    marginRight: 20,
    color: '#687684',
    fontSize: 16,
  },
  buttonContainer: {},
  buttonText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  appInfoContainer: {
    marginTop: 20,
    borderTopWidth: 0.33,
    borderColor: '#CED5DC',
  },
  appInfoText: {
    marginLeft: 15,
    marginTop: 15,
    color: 'black',
    fontSize: 18,
  },
  footer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
