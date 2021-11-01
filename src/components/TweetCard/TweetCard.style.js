import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  innerContainer: {
    borderTopWidth: 0.33,
    borderColor: '#CED5DC',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  account: {
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  profileIcon: {
    marginTop: 5,
  },
  line: {
    marginVertical: 5,
  },
  situation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  situationIcon: {
    marginLeft: -20,
    marginRight: 8,
  },
  situationText: {
    color: '#687684',
  },
  content: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginRight: 10,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    marginRight: 5,
  },
  username: {
    color: '#687684',
    fontSize: 16,
  },
  dateText: {
    color: '#687684',
    fontSize: 16,
  },
  content: {},
  tweet: {
    color: 'black',
    fontWeight: '400',
    marginBottom: 10,
    marginRight: 10,
    flex: 1,
    fontSize: 16,
    width: 300,
  },
  threadContainer: {
    flexDirection: 'row',
  },
  threadText: {
    color: '#4C9EEB',
    fontSize: 16,
    fontWeight: '400',
    /*  paddingTop: 6, */
  },
  hashtag: {
    color: '#4C9EEB',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 5,
    alignItems: 'center',
  },
  countText: {
    color: '#687684',
    fontSize: 12,
  },
  sharedIcon: {
    marginRight: 20,
  },
});
