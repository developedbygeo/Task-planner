import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import Card from '../UI/Card/Card';
import styles from './List.module.css';

const List = ({ onClick, title, selected, id }) => {
  const { darkTheme } = useContext(ThemeContext);
  const selectedDark = selected && darkTheme;

  const classes = `${styles.listItems}  ${
    darkTheme ? styles.darkListItems : ''
  } ${selectedDark && styles.selectedDark} 
  ${selected ? styles.selected : ''}`;

  return (
    <li
      onClick={onClick}
      key={id}
      className={classes}
      title={`Click to enable the ${title} list`}
    >
      <Card>
        <p>{title}</p>
      </Card>
    </li>
  );
};

export default List;
