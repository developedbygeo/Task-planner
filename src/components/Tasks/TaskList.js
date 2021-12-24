import { useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import Task from './Task';
import styles from './TaskList.module.css';

const TaskList = ({ isAsideActive }) => {
  const {
    currentState: { tasksAndLists: allTasks },
  } = useContext(TaskContext);
  const activeTasks = allTasks.filter((list) => list.selected === true)[0]
    .tasks;

  const tasks = activeTasks.map(({ task, priority, id }) => (
    <Task header={task} description={priority} key={id} />
  ));

  return (
    <ul className={isAsideActive ? styles.ulAsideActive : styles.ul}>
      {tasks}
    </ul>
  );
};

export default TaskList;
