import {StyleSheet} from 'react-native';
import {GRAY_100, GRAY_300, GRAY_400} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: GRAY_400,
    borderRadius: 8,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
    height: 'auto',
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: GRAY_100,
    marginHorizontal: 8,
  },
  textChecked: {
    flex: 1,
    fontSize: 14,
    color: GRAY_300,
    marginHorizontal: 8,
    textDecorationLine: 'line-through',
  },
});
