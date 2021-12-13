import styles from './Aside.module.css';
import SearchAdd from '../Header/Search/Search';
import Card from '../UI/Card/Card';

const Aside = ({ theme, children }) => {
  return (
    <aside className={theme ? styles.dark : styles.aside}>
      <Card className={styles.title}>
        <h3>Current Lists</h3>
      </Card>
      <Card className={styles.add}>
        <SearchAdd placeholder={'Looking for a list?'} />
      </Card>
      <Card>{children}</Card>
    </aside>
  );
};

export default Aside;
