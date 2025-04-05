import {styles} from './style.ts';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Check from '../../assets/check.svg';
import Checked from '../../assets/checked.svg';
import Trash from '../../assets/trash.svg';
import {useState} from 'react';
import {Task as TaskProps} from '../../types/api.ts';

export default function Task({description, checked: check}: TaskProps) {
  const [checked, setChecked] = useState(check);

  function handleDelete() {
    Alert.alert('Remover', 'Deseja realmente remover?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => {},
        style: 'default',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => setChecked(prevState => !prevState)}>
          {checked ? <Checked /> : <Check />}
        </TouchableOpacity>
        <Text style={checked ? styles.textChecked : styles.text}>
          {description}
        </Text>
        <TouchableOpacity onPress={handleDelete}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );
}
