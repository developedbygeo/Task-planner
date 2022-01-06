import { useState, useContext, useRef, useEffect } from 'react';
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
import { TaskContext } from '../../store/taskContext';

const Nav = ({ onAsideEnable }) => {
  const [searchStatus, setsearchStatus] = useState(false);
  const { searchTask } = useContext(TaskContext);
  const { darkTheme, onThemeChange } = useContext(ThemeContext);
  const searchRef = useRef();

  const toggleSearchHandler = (e) => {
    e.preventDefault();
    setsearchStatus((prevState) => !prevState);
  };

  const searchTaskHandler = () => {
    const query = searchRef.current.value.toLowerCase();
    if (query.trim().length >= 2) {
      searchTask(query);
    }
  };

  useEffect(() => {
    if (searchStatus) {
      const searchTimer = setTimeout(() => {
        searchRef.current.focus();
      }, 100);
      return () => {
        clearTimeout(searchTimer);
      };
    }
  }, [searchStatus]);

  const buttonClasses = darkTheme ? styles.ctaDark : styles.cta;

  return (
    <nav>
      <Button
        onClick={onAsideEnable}
        title="Toggle menu"
        className={buttonClasses}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Card className={styles.buttons}>
        {searchStatus && (
          <Search
            onChange={searchTaskHandler}
            ref={searchRef}
            className={styles.search}
            placeholder="What are we looking for?"
          />
        )}
        <Button
          onClick={toggleSearchHandler}
          type="submit"
          title="Search"
          className={buttonClasses}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button
          className={buttonClasses}
          onClick={onThemeChange}
          title={`Change to ${darkTheme ? 'light' : 'dark'} mode`}
        >
          {darkTheme && <FontAwesomeIcon icon={faToggleOff} />}
          {!darkTheme && <FontAwesomeIcon icon={faToggleOn} />}
        </Button>
      </Card>
    </nav>
  );
};

export default Nav;
