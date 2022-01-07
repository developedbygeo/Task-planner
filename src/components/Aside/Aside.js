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
    activateList,
    currentState: { tasksAndLists: allLists },
  } = useContext(TaskContext);

  const toggleActiveHandler = (list) => activateList(list);

  const mainClass = darkTheme ? styles.dark : styles.aside;

  return (
    <aside className={mainClass}>
      <div className={styles.container}>
        <Card className={styles.title}>
          <h3>Lists</h3>
        </Card>
        <AsideForm onFormReset={onFormReset} />
      </div>
      <div className={styles.ulWrapper}>
        <ul>
          {allLists.map((list) => (
            <List
              onClick={toggleActiveHandler.bind(null, list)}
              title={list.list}
              selected={list.selected}
              key={_.uniqueId()}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
