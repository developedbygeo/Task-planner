import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBars,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';
import Search from '../UI/Search/Search';
import Card from '../UI/Card/Card';
import styles from './Nav.module.css';
import ThemeContext from '../../store/themeContext';

const Nav = ({ onAsideEnable }) => {
  const [searchStatus, setsearchStatus] = useState(false);
  const ctx = useContext(ThemeContext);

  const toggleSearchHandler = (e) => {
    e.preventDefault();
    setsearchStatus((prevState) => {
      const inputToggle = prevState === false ? true : false;
      setsearchStatus(inputToggle);
    });
  };

  return (
    <nav>
      <Button
        onClick={onAsideEnable}
        title="Toggle menu"
        className={ctx.darkTheme ? styles.ctaDark : styles.cta}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Card className={styles.buttons}>
        {searchStatus && (
          <Search
            className={styles.search}
            placeholder="What are we looking for?"
          />
        )}
        <Button
          onClick={toggleSearchHandler}
          type="submit"
          title="Search"
          className={ctx.darkTheme ? styles.ctaDark : styles.cta}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button
          className={ctx.darkTheme ? styles.ctaDark : styles.cta}
          onClick={ctx.onThemeChange}
          title="Toggle dark mode"
        >
          {ctx.darkTheme && <FontAwesomeIcon icon={faToggleOff} />}
          {!ctx.darkTheme && <FontAwesomeIcon icon={faToggleOn} />}
        </Button>
      </Card>
    </nav>
  );
};

export default Nav;
