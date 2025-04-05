import {StyleSheet} from 'react-native';
import {GRAY_600, GRAY_700} from '../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY_700,
    padding: 24,
  },
  subContainer: {
    position: 'absolute',
    marginTop: 163,
    height: 900,
    width: 500,
    paddingLeft: 100,
    backgroundColor: GRAY_600,
  },
  logo: {
    marginTop: 32,
    alignItems: 'center',
  },
});
