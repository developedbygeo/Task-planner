import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import Card from '../UI/Card/Card';
import styles from './List.module.css';

const List = ({ title, selected, id }) => {
  const { darkTheme } = useContext(ThemeContext);
  const selectedDark = selected && darkTheme;

  return (
    <li
      key={id}
      className={`${styles.listItems}  ${
        darkTheme ? styles.darkListItems : null
      } ${selectedDark && styles.selectedDark} 
      ${selected ? styles.selected : null}`}
    >
      <Card>
        <p>{title}</p>
      </Card>
    </li>
  );
};

export default List;
