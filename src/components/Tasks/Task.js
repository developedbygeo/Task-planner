import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../store/themeContext';
import { TaskContext } from '../../store/taskContext';
import Priority from '../UI/Priority/Priority';
import Card from '../UI/Card/Card';
import styles from './Task.module.css';

const Task = ({
  onClick,
  completed,
  title,
  header,
  id,
  description,
  tabIndex,
}) => {
  const { darkTheme } = useContext(ThemeContext);
  const {
    currentState: { selection },
  } = useContext(TaskContext);
  const [isTaskSelected, setTaskSelected] = useState(false);

  useEffect(() => {
    if (selection === id) {
      setTaskSelected(true);
      const timer = setTimeout(() => {
        setTaskSelected(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selection, id]);

  return (
    <li
      onClick={onClick}
      className={styles.li}
      key={id}
      title={title}
      tabIndex={tabIndex}
    >
      <Card
        className={`${styles.elementWrapper} ${
          completed ? styles.completed : ''
        } ${isTaskSelected ? styles.shake : ''}`}
      >
        {header && <h3>{header}</h3>}
        {description && (
          <Priority
            className={darkTheme ? styles.starsDark : styles.stars}
            priorityLevel={description}
          />
        )}
      </Card>
    </li>
  );
};

export default Task;
