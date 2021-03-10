import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autoCompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },

  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },

  square: {
    width: 5,
    height: 5,
    backgroundColor: '#000',
    position: 'absolute',
    top: 80,
    left: 15,
    borderRadius: 5,
  },
});

export default styles;
