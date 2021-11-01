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
  headerTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  innerContainer: {
    borderTopWidth: 0.5,
    borderColor: '#CED5DC',
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    minHeight: 85,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    width: 382,
    height: 40,
    backgroundColor: '#E7ECF0',
    borderRadius: 16,
    textAlign: 'left',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 10,
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
