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
    fontSize: 14,
  },
  tweetContainer: {},
  linkContainer: {
    flexDirection: 'row',
    minHeight: 80,
    borderWidth: 0.9,
    borderColor: '#CED5DC',
    borderRadius: 15,
    marginBottom: 10,
  },
  linkImage: {},
  linkContent: {
    flex: 1,
    paddingTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
  },
  linkContentText: {
    color: 'black',
    fontSize: 15,
  },
  linkContentLink: {
    color: '#687684',
    fontSize: 15,
  },
  tweet: {
    color: '#687684',
    fontWeight: '400',
    marginRight: 10,
    marginBottom: 10,
    fontSize: 16,
    width: 300,
  },
  tweetBlack: {
    color: 'black',
    fontWeight: '400',
    marginRight: 10,
    marginBottom: 10,
    fontSize: 16,
    width: 300,
  },
  link: {
    color: '#4C9EEB',
    fontSize: 16,
  },
  hashtag: {
    color: '#4C9EEB',
    fontSize: 16,
    marginVertical: 10,
    width: 300,
  },
  threadContainer: {
    flexDirection: 'row',
  },
  threadText: {
    color: '#4C9EEB',
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  footerLeft: {
    flex: 2,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
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
  footerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
  },
});
