import { useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './RemoveTaskDialogue.module.css';

const RemoveTaskDialogue = ({ onRemoveMenuDisable }) => {
  const {
    currentState: { tasksAndLists: allLists },
  } = useContext(TaskContext);

  const numberOfTasks = allLists
    .find((list) => list.selected === true)
    .tasks.filter((task) => task.completed === true).length;

  return (
    <div className={styles.dialogueWrapper}>
      <div className={styles.warning}>
        <p>
          You are about to remove{' '}
          <span className={styles.value}>{numberOfTasks}</span> tasks.
          <br /> Do you want to proceed?
        </p>
      </div>
      <div className={styles.actionWrapper}>
        <div className={styles.actions}>
          <Button
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
