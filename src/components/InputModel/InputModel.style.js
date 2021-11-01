import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15,
  },
  cancel: {
    color: '#4C9EEB',
    fontSize: 17,
  },
  tweetButton: {
    backgroundColor: '#B9DCF7',
    width: 67,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  tweetActiveButtonText: {
    backgroundColor: '#4C9EEB',
    width: 67,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  tweetButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  tweetContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tweetHeader: {
    flexDirection: 'row',
  },
  input: {
    color: 'black',
    fontSize: 19,
  },
  tweetFooter: {},
  gallery: {
    flexDirection: 'row',
  },
  camera: {
    width: 78,
    height: 78,
    borderRadius: 17,
    borderWidth: 0.8,
    borderColor: '#CED5DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  media: {
    marginRight: 10,
  },
  extra: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    borderTopWidth: 1,
    borderTopColor: '#CED5DC',
    marginTop: 10,
  },
  leftButtons: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
  },
});
