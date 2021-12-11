import styles from './Header.module.css';
import Nav from './Nav';

const Header = ({ onThemeSelection }) => {
  const passTheme = (theme) => {
    onThemeSelection(theme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/developedbygeo"
        >
          <h1>
            <span className={styles.logo1}>Task</span> Tracker
          </h1>
        </a>
      </div>
      <Nav onThemeSelection={passTheme} />
    </header>
  );
};

export default Header;
