import {StyleSheet} from 'react-native';
import {GRAY_400} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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
  text:{
    flex: 1,
    fontSize: 14,
    marginHorizontal: 8,
  },
});
