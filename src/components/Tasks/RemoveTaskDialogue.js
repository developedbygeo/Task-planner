import { useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './RemoveTaskDialogue.module.css';

const RemoveTaskDialogue = ({ onRemoveMenuDisable }) => {
  const {
    currentState: { tasksAndLists: allLists },
    deleteTask,
  } = useContext(TaskContext);

  const activeList = allLists.find((list) => list.selected === true);
  const isDefault = activeList.list === 'default' ? true : false;

  const tasksToBeRemoved = activeList.tasks.filter(
    (task) => task.completed === true
  );

  const numberOfDelTasks = tasksToBeRemoved.length;

  const deleteTasksHandler = () => {
    tasksToBeRemoved.map((task) => deleteTask(task.id));
    onRemoveMenuDisable();
  };

  const tasksSpan = numberOfDelTasks > 1 ? 'tasks' : 'task';

  const listDeletionWarning =
    activeList.tasks.length === numberOfDelTasks && !isDefault ? (
      <span>
        <br />
        The list will also be <b>deleted</b>.
      </span>
    ) : (
      ''
    );

  return (
    <div className={styles.dialogueWrapper}>
      <div className={styles.warning}>
        <p>
          You are about to remove{' '}
          <span className={styles.value}>{numberOfDelTasks}</span> {tasksSpan}.
          {listDeletionWarning}
          <br /> Do you want to proceed?
        </p>
      </div>
      <div className={styles.actionWrapper}>
        <div className={styles.actions}>
          <Button
            onClick={deleteTasksHandler}
            title="Yup, let's delete them."
            className={`${styles.cta} ${styles.ctaYes}`}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
          <Button
            onClick={onRemoveMenuDisable}
            title="Nope, do not delete."
            className={`${styles.cta} ${styles.ctaNo}`}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RemoveTaskDialogue;
