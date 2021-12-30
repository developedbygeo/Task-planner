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
import { TaskContext } from '../../store/taskContext';

const Nav = ({ onAsideEnable }) => {
  const [searchStatus, setsearchStatus] = useState(false);
  const { darkTheme, onThemeChange } = useContext(ThemeContext);
  const { searchTask } = useContext(TaskContext);

  const toggleSearchHandler = (e) => {
    e.preventDefault();
    setsearchStatus((prevState) => !prevState);
  };

  const searchTaskHandler = (e) => {
    const query = e.target.value.toLowerCase();
    if (query.trim().length > 1) {
      searchTask(query);
    }
  };

  return (
    <nav>
      <Button
        onClick={onAsideEnable}
        title="Toggle menu"
        className={darkTheme ? styles.ctaDark : styles.cta}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Card className={styles.buttons}>
        {searchStatus && (
          <Search
            onChange={searchTaskHandler}
            className={styles.search}
            placeholder="What are we looking for?"
          />
        )}
        <Button
          onClick={toggleSearchHandler}
          type="submit"
          title="Search"
          className={darkTheme ? styles.ctaDark : styles.cta}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
        <Button
          className={darkTheme ? styles.ctaDark : styles.cta}
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
