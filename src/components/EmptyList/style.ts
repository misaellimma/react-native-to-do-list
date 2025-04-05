import {StyleSheet} from 'react-native';
import {GRAY_400} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 48,
  },
  line: {
    backgroundColor: GRAY_400,
    paddingVertical: 1,
  },
  clipboard: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  textPrimary: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textSecondary: {
    fontSize: 14,
  },
});
