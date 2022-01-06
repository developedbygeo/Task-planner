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

  const themeBtnClasses = `${styles.actionBtn} ${
    darkTheme ? styles.darkBtn : styles.lightBtn
  } `;
  const sectionClasses = darkTheme ? styles.dark : styles.section;
  const actionWrapperClasses = `${styles.actionsWrapper} ${
    markedTasksExist ? styles.actionsWrapperDel : ''
  }`;

  return (
    <section className={sectionClasses}>
      {children}
      <div className={actionWrapperClasses}>
        <Button
          className={`${themeBtnClasses} ${styles.add}`}
          onClick={onMenuEnable}
          title={'Add a new task!'}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {markedTasksExist && (
          <Button
            onClick={onRemoveMenuEnable}
            className={`${themeBtnClasses} ${styles.delete}`}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
