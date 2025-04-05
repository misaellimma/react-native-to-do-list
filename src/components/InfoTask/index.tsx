import {styles} from './style.ts';
import {Text, View} from 'react-native';
import Counter from '../Counter';

type Props = {
  createdCount: number;
  completedCount: number;
};

export default function InfoTasks(props: Props) {
  return (
    <View style={styles.infoTasks}>
      <View style={styles.tasks}>
        <Text style={styles.createdTasks}>Criadas</Text>
        <Counter count={props.createdCount} />
      </View>
      <View style={styles.tasks}>
        <Text style={styles.completedTasks}>Concluídas</Text>
        <Counter count={props.completedCount} />
      </View>
    </View>
  );
}
