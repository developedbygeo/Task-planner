import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <header className={`${styles.header} ${darkTheme && styles.dark}`}>
      <div className={styles.logoWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/developedbygeo"
        >
          <h1 className={darkTheme ? styles.darkText : undefined}>
            <span className={styles.logo1}>Task</span> Tracker
          </h1>
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
