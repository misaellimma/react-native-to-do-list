import {StyleSheet} from 'react-native';
import {BLUE_DARK, GRAY_100, GRAY_500} from '../../styles';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    height: 54,
    borderRadius: 6,
    color: GRAY_100,
    backgroundColor: GRAY_500,
    fontSize: 16,
    marginRight: 6,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  form: {
    flexDirection: 'row',
    marginTop: 48,
  },
});
