import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Section.module.css';

const Section = ({ children, onMenuEnable }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className={darkTheme ? styles.dark : styles.section}>
      {children}
      <Button
        className={`${styles.add} ${
          darkTheme ? styles.darkBtn : styles.lightBtn
        }`}
        onClick={onMenuEnable}
        title={'Add a new task!'}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </section>
  );
};

export default Section;
