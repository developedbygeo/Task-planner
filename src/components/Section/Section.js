import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import { TaskContext } from '../../store/taskContext';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './Section.module.css';

const Section = ({ children, onMenuEnable, onRemoveMenuEnable }) => {
  const { darkTheme } = useContext(ThemeContext);
  const {
    currentState: { tasksAndLists },
  } = useContext(TaskContext);

  const markedTasksExist = tasksAndLists
    .find((list) => list.selected)
    .tasks.find((task) => task.completed)
    ? true
    : false;

  return (
    <section className={darkTheme ? styles.dark : styles.section}>
      {children}
      <div
        className={`${styles.actionsWrapper} ${
          markedTasksExist ? styles.actionsWrapperDel : ''
        }`}
      >
        <Button
          className={`${styles.actionBtn} ${styles.add} ${
            darkTheme ? styles.darkBtn : styles.lightBtn
          }`}
          onClick={onMenuEnable}
          title={'Add a new task!'}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {markedTasksExist && (
          <Button
            onClick={onRemoveMenuEnable}
            className={`${styles.actionBtn} ${styles.delete} ${
              darkTheme ? styles.darkBtn : styles.lightBtn
            }`}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
