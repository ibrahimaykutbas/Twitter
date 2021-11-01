import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingLeft: 40,
    paddingBottom: 10,
    borderTopWidth: 0.33,
    borderTopColor: '#CED5DC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startIcon: {
    marginRight: 10,
  },
  arrowIcon: {
    marginRight: 30,
  },
  infoText: {
    color: '#687684',
    fontSize: 16,
    marginLeft: 33,
    marginTop: 10,
  },
  contentText: {
    color: '#687684',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 33,
  },
});
