import { useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import ThemeContext from '../../store/themeContext';
import Task from './Task';
import styles from './TaskList.module.css';

const TaskList = ({ isAsideActive }) => {
  const {
    toggleComplete,
    currentState: { tasksAndLists },
  } = useContext(TaskContext);
  const activeTasks = tasksAndLists.filter((list) => list.selected === true)[0]
    .tasks;
  const { darkTheme } = useContext(ThemeContext);

  const taskRemoveHandler = (id) => toggleComplete(id);

  const tasks = activeTasks.map(({ completed, task, priority, id }) => (
    <Task
      onClick={taskRemoveHandler.bind(null, id)}
      title={`Mark ${task} as ${completed ? 'pending' : 'completed'}`}
      header={task}
      description={priority}
      key={id}
      id={id}
      completed={completed}
    />
  ));

  return (
    <ul
      className={`${isAsideActive ? styles.ulAsideActive : styles.ul} ${
        darkTheme ? styles.dark : ''
      }`}
    >
      {tasks}
    </ul>
  );
};

export default TaskList;
