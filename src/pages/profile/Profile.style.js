import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#1F1F1F',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButton: {
    marginLeft: -70,
    marginTop: -50,
    borderRadius: 50,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F0F0F',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
  },
  infoContainer: {},
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileIcon: {
    marginLeft: 15,
    marginTop: -30,
    borderTopWidth: 75,
    borderRadius: 100,
    borderColor: 'white',
    width: 100,
    height: 100,
    paddingHorizontal: 40,
    paddingTop: 15,
  },
  buttonContainer: {
    marginTop: 10,
    marginRight: 15,
    width: 93,
    height: 32,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#4C9EEB',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
  },
  buttonText: {
    color: '#4C9EEB',
    fontSize: 14,
    fontWeight: 'bold',
  },
  name: {
    marginLeft: 15,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  username: {
    marginLeft: 15,
    marginTop: 2,
    fontSize: 16,
    color: '#687684',
  },
  about: {
    marginLeft: 15,
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 5,
  },
  linkText: {
    color: '#4C9EEB',
    fontSize: 14,
    marginRight: 20,
  },
  dateText: {
    color: '#687684',
    fontSize: 14,
  },
  statistics: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
  },
  following: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
  },
  followingText: {
    marginRight: 20,
    color: '#687684',
  },
  followers: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
  },
  followersText: {
    marginRight: 20,
    color: '#687684',
  },
});
