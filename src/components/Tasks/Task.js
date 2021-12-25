import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import Priority from '../UI/Priority/Priority';
import Card from '../UI/Card/Card';
import styles from './Task.module.css';

const Task = ({ header, id, description }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <li className={styles.li} key={id}>
      <Card className={styles.elementWrapper}>
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
