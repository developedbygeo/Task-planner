import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../store/themeContext';
import Form from '../UI/Form/Form';
import Card from '../UI/Card/Card';
import styles from './Aside.module.css';

const Aside = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <aside className={darkTheme ? styles.dark : styles.aside}>
      <Card className={styles.title}>
        <h3>Current Lists</h3>
      </Card>
      <Form
        className={styles.asideForm}
        isFieldActive={true}
        formData={[
          { placeholder: `Let's add a list`, labelStatus: false, label: '' },
        ]}
        type={'submit'}
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </Form>
      <Card>{children}</Card>
    </aside>
  );
};

export default Aside;
