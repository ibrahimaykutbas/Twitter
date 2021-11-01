import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECF0',
    justifyContent: 'space-between',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
  },
  backButton: {},
  icon: {
    marginRight: 20,
  },
  contentContainer: {
    minHeight: 200,
    backgroundColor: '#FFFFFF',
    paddingBottom: 15,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 25,
  },
  nameContainer: {
    marginLeft: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: '#687684',
    fontSize: 16,
  },
  arrowIcon: {
    marginRight: 30,
  },
  tweetContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
  },
  tweetText: {
    color: '#687684',
    fontSize: 22,
    marginBottom: 25,
  },
  linkContainer: {
    flexDirection: 'row',
    width: 361,
    height: 80,
    borderWidth: 0.5,
    borderColor: '#CED5DC',
    borderRadius: 15,
    marginBottom: 10,
  },
  linkImage: {
    resizeMode: 'contain',
  },
  linkContent: {
    flex: 1,
    paddingTop: 6,
    paddingLeft: 5,
    paddingRight: 5,
  },
  linkContentText: {
    color: 'black',
    fontSize: 15,
  },
  linkContentLink: {
    color: '#687684',
    fontSize: 15,
  },
  infoContainer: {
    marginLeft: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  infoText: {
    color: '#687684',
    fontSize: 16,
    fontWeight: '500',
  },
  app: {
    color: '#4C9EEB',
    fontSize: 16,
    fontWeight: '500',
  },
  activityContainer: {
    marginLeft: 10,
    marginRight: 15,
    marginTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#CED5DC',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityText: {
    color: '#687684',
    fontSize: 16,
    fontWeight: '400',
  },
  activityIcon: {
    marginLeft: 5,
    marginRight: 10,
  },
  statistics: {
    marginLeft: 10,
    marginRight: 15,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CED5DC',
  },
  countText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  sortText: {
    color: '#687684',
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 50,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#687684',
    fontSize: 12,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
  },
  input: {
    backgroundColor: '#E7ECF0',
    marginHorizontal: 10,
    borderRadius: 17.5,
    paddingLeft: 15,
    flex: 1,
    height: 30,
    paddingTop: 5,
    color: 'black',
  },
});
