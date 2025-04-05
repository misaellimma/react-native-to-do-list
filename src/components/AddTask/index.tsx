import {styles} from './style.ts';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {GRAY_300} from '../../styles';
import Plus from '../../assets/plus.svg';

export default function AddTask() {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={GRAY_300}
      />
      <TouchableOpacity style={styles.button}>
        <Plus width={16} height={16} />
      </TouchableOpacity>
    </View>
  );
}
