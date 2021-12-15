import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import styles from './Section.module.css';

const Section = ({ children }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section className={darkTheme ? styles.dark : styles.section}>
      {children}
    </section>
  );
};

export default Section;
