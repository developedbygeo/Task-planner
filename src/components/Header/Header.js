import React, { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import Nav from './Nav';
import styles from './Header.module.css';

const Header = ({ onAsideEnable }) => {
  const { darkTheme } = useContext(ThemeContext);

  const headerClasses = `${styles.header} ${darkTheme ? styles.dark : ''}`;
  const h1Classes = darkTheme ? styles.darkText : '';

  return (
    <header className={headerClasses}>
      <div className={styles.logoWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/developedbygeo"
          title="My GitHub Profile"
        >
          <h1 className={h1Classes}>
            <span className={styles.logo1}>Task</span> Planner
          </h1>
        </a>
      </div>
      <Nav onAsideEnable={onAsideEnable} />
    </header>
  );
};

export default React.memo(Header);
