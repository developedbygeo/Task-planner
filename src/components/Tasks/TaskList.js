import Task from './Task';
import styles from './TaskList.module.css';

const currentTasks = [
  { header: 'potatoes', id: Date.now().valueOf(), description: 'yolooo' },
];

const TaskList = ({ isAsideActive }) => {
  const tasks = currentTasks.map(({ header, id, description }) => (
    <Task header={header} key={id} description={description} />
  ));

  return (
    <ul className={isAsideActive ? styles.ulAsideActive : styles.ul}>
      {tasks}
    </ul>
  );
};

export default TaskList;
