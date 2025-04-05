import {View} from 'react-native';
import {styles} from './styles.ts';
import Logo from '../assets/Logo.svg';

import InfoTasks from '../components/InfoTask';
import Tasks from '../components/Tasks';
import {Task} from '../types/api.ts';
import AddTask from '../components/AddTask';

export default function Home() {
  const tasks: Task[] = [{ checked: false, description: 'Check task' }];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer} />
      <View style={styles.logo}>
        <Logo width={110} height={32} />
      </View>
      <AddTask />
      <InfoTasks createdCount={5} completedCount={8} />
      <Tasks tasks={tasks} />
    </View>
  );
}
