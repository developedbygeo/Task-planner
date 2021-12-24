import Card from '../UI/Card/Card';
import styles from './List.module.css';

const List = ({ title, selected, id }) => {
  return (
    <li
      key={id}
      className={`${styles.listItems} ${selected ? styles.selected : null}`}
    >
      <Card>
        <p>{title}</p>
      </Card>
    </li>
  );
};

export default List;
