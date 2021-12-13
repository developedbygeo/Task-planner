import styles from './Header.module.css';
import Nav from './Nav';

const Header = ({ onAsideEnable, theme }) => {
  return (
    <header className={`${styles.header} ${theme && styles.dark}`}>
      <div className={styles.logoWrapper}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/developedbygeo"
        >
          <h1 className={theme ? styles.darkText : undefined}>
            <span className={styles.logo1}>Task</span> Tracker
          </h1>
        </a>
      </div>
      <Nav onAsideEnable={onAsideEnable} />
    </header>
  );
};

export default Header;
