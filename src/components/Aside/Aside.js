import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import { TaskContext } from '../../store/taskContext';
import _ from 'lodash';
import AsideForm from './AsideForm';
import List from './List';
import Card from '../UI/Card/Card';
import styles from './Aside.module.css';

const Aside = ({ onFormReset }) => {
  const { darkTheme } = useContext(ThemeContext);
  const {
    currentState: { tasksAndLists: allLists },
  } = useContext(TaskContext);

  return (
    <aside className={darkTheme ? styles.dark : styles.aside}>
      <div className={styles.container}>
        <Card className={styles.title}>
          <h3>Current Lists</h3>
        </Card>
        <AsideForm onFormReset={onFormReset} />
      </div>
      <ul>
        {allLists.map((list) => (
          <List title={list.list} selected={list.selected} key={_.uniqueId()} />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
