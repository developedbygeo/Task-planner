import { useContext } from 'react';
import ThemeContext from '../../store/themeContext';
import AddTaskForm from './AddTaskForm';
import RemoveTaskDialogue from './RemoveTaskDialogue';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './AddTask.module.css';

const AddTask = ({ onFormReset, onMenuDisable, add }) => {
  const { darkTheme } = useContext(ThemeContext);

  const addingLayout = (
    <>
      <Button
        onClick={onMenuDisable}
        className={`${styles.ctaSec} ${darkTheme ? styles.ctaSecDark : null}`}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <AddTaskForm onFormReset={onFormReset} />
    </>
  );

  const removingLayout = (
    <>
      <RemoveTaskDialogue onRemoveMenuDisable={onMenuDisable} />
    </>
  );

  return (
    <Modal onMenuDisable={onMenuDisable} className={darkTheme && styles.dark}>
      {add && addingLayout}
      {!add && removingLayout}
      {/* <Button
          onClick={onMenuDisable}
          className={`${styles.ctaSec} ${darkTheme ? styles.ctaSecDark : null}`}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
        <AddTaskForm onFormReset={onFormReset} /> */}
    </Modal>
  );
};

export default AddTask;
