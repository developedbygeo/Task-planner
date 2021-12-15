import Card from '../UI/Card/Card';
import styles from './Task.module.css';

const Task = ({ header, id, description }) => {
  return (
    <li className={styles.li} key={id}>
      <Card className={styles.elementWrapper}>
        {header ? <h3>{description}</h3> : <h4>{description}</h4>}
      </Card>
    </li>
  );
};

export default Task;
