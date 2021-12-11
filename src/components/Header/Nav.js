import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBars,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';
import Search from './Search/Search';
import Card from '../UI/Card/Card';
import styles from './Nav.module.css';
import ThemeContext from '../../store/themeContext';

const Nav = ({ onThemeSelection }) => {
  const [searchStatus, setsearchStatus] = useState(false);
  const [asideStatus, setAsideStatus] = useState(false);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);
  const { darkTheme } = useContext(ThemeContext);

  // TODO work on the aside (drawer)

  const toggleSideHandler = () => {
    setsearchStatus((prevState) => {
      const asideToggle = prevState === false ? true : false;
      setAsideStatus(asideToggle);
    });
  };

  const toggleSearchHandler = (e) => {
    e.preventDefault();
    setsearchStatus((prevState) => {
      const inputToggle = prevState === false ? true : false;
      setsearchStatus(inputToggle);
    });
  };

  const toggleThemeHandler = () => {
    setDarkThemeEnabled((prevState) => {
      const themeToggle = prevState === false ? true : false;
      setDarkThemeEnabled(themeToggle);
    });
    onThemeSelection(darkThemeEnabled);
  };

  return (
    <nav>
      <Button
        onClick={toggleSideHandler}
        title="Toggle menu"
        additionalClass={(darkTheme && styles.ctaDark) || styles.cta}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Card className={styles.buttons}>
        <form>
          {searchStatus && <Search />}
          <Button
            onClick={toggleSearchHandler}
            type="submit"
            title="Search"
            additionalClass={(darkTheme && styles.ctaDark) || styles.cta}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </form>
        <Button
          additionalClass={(darkTheme && styles.ctaDark) || styles.cta}
          onClick={toggleThemeHandler}
          title="Toggle dark mode"
        >
          {darkTheme && <FontAwesomeIcon icon={faToggleOff} />}
          {!darkTheme && <FontAwesomeIcon icon={faToggleOn} />}
        </Button>
      </Card>
    </nav>
  );
};

export default Nav;
