import {styles} from './style.ts';
import {Text, View} from 'react-native';
import Clipboard from '../../assets/Clipboard.svg';

export default function EmptyList() {
  return (
    <View>
      <View style={styles.line} />
      <View style={styles.container}>
        <Clipboard style={styles.clipboard} />
        <Text style={styles.textPrimary}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textSecondary}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
