import {StyleSheet} from 'react-native';
import {BLUE, PURPLE} from '../../styles';

export const styles = StyleSheet.create({
  infoTasks: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdTasks: {
    color: BLUE,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginRight: 4,
  },
  completedTasks: {
    color: PURPLE,
    fontWeight: 'bold',
    marginRight: 4,
  },
});
