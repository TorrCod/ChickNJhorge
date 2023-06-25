import {StyleSheet} from 'react-native';

export const theme = {
  primary: '#D9D9D9',
  fontColor: '#2b2b2b',
  backgroundColor: '#D9D9D9',
  buttonPrimary: '#e68e24',
};

export const style = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  input: {
    borderRadius: 5,
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  productContainer: {
    width: 190,
    height: 119,
    backgroundColor: theme.primary,
    borderRadius: 10,
    padding: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.fontColor,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.fontColor,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: theme.buttonPrimary,
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
