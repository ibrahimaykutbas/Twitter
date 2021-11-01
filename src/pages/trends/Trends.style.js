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
    paddingBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    borderTopWidth: 0.5,
    borderColor: '#CED5DC',
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 32,
    width: 286,
    backgroundColor: '#E7ECF0',
    borderRadius: 16,
    textAlign: 'center',
    padding: 1,
  },
  header: {
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    borderColor: '#CED5DC',
  },
  headerText: {
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  content: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  info: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#687684',
  },
  buttonContainer: {
    backgroundColor: '#4C9EEB',
    width: 130,
    height: 30,
    alignItems: 'center',
    paddingTop: 4,
    borderRadius: 16,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});
