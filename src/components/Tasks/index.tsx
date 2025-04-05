import {styles} from './style.ts';
import {FlatList, View} from 'react-native';
import Task from '../Task';
import {Task as TaskProps} from '../../types/api.ts';
import EmptyList from '../EmptyList';

type Props = {
  tasks: TaskProps[];
};

export default function Tasks(props: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Task key={index} checked={item.checked} description={item.description} />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
