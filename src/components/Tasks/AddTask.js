import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import AddTaskForm from './AddTaskForm';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './AddTask.module.css';

const AddTask = ({ onAddTask, onMenuDisable }) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <Modal onMenuDisable={onMenuDisable} className={darkTheme && styles.dark}>
      <Button
        onClick={onMenuDisable}
        className={`${styles.ctaSec} ${darkTheme ? styles.ctaSecDark : null}`}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <AddTaskForm onAddTask={onAddTask} />
    </Modal>
  );
};

export default AddTask;