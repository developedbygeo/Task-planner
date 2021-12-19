import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import AsideForm from './AsideForm';
import Card from '../UI/Card/Card';
import styles from './Aside.module.css';

const Aside = ({ children, onAddList }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <aside className={darkTheme ? styles.dark : styles.aside}>
      <Card className={styles.title}>
        <h3>Current Lists</h3>
      </Card>
      <AsideForm onAddList={onAddList} />
      <Card>{children}</Card>
    </aside>
  );
};

export default Aside;
