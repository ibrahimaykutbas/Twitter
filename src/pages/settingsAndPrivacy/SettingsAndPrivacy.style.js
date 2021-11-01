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
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingLeft: 20,
  },
  headerTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 50,
  },
  done: {
    color: '#4C9EEB',
    fontSize: 17,
  },
  innerContainer: {
    marginTop: 5,
    paddingTop: 13,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  innerContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 25,
  },
  innerContainerHeaderText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  warning: {
    color: '#687684',
    fontSize: 14,
  },
  contentHeader: {
    color: '#687684',
    fontSize: 19,
    marginTop: 12,
    marginLeft: 20,
  },
  contentText: {
    color: '#687684',
    fontSize: 14,
    paddingRight: 10,
  },
  link: {
    color: '#4C9EEB',
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#CED5DC',
    marginVertical: 10,
  },
});
