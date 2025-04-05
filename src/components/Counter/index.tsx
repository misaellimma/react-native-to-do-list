import {styles} from './style.ts';
import {Text, View} from 'react-native';

export default function Counter({count}: {count: number}) {
  return (
    <View style={styles.counter}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}
