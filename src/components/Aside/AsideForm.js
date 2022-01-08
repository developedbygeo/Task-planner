import { useRef, useContext, useState } from 'react';
import { TaskContext } from '../../store/taskContext';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import styles from './AsideForm.module.css';

const AsideForm = ({ onFormReset }) => {
  const {
    addList,
    currentState: { tasksAndLists: existingLists },
  } = useContext(TaskContext);
  const listRef = useRef();
  const [errorExists, setErrorExists] = useState(false);

  const listInputHandler = () => {
    setErrorExists(false);
    setTimeout(() => {
      listRef.current.focus();
    }, 200);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newList = listRef.current.value;
    const lengthCheck = newList.trim().length > 0;
    const listnameAlreadyExists =
      existingLists.findIndex(
        (obj) => obj.list === newList || obj.list === newList.toLowerCase()
      ) > -1;

    if (lengthCheck && !listnameAlreadyExists) {
      addList(newList);
      onFormReset([listRef]);
    } else {
      setErrorExists(true);
      return;
    }
  };

  const errorMessage = (
    <div className={styles.errorWrapper}>
      <p className={styles.error}>Oops, list already exists!</p>
    </div>
  );

  return (
    <>
      <form onSubmit={submitHandler} className={styles.asideForm}>
        <div key={_.uniqueId()}>
          <Search
            onFocus={listInputHandler}
            required
            ref={listRef}
            placeholder={`Let's add a list!`}
          />
        </div>
        <div>
          <Button type="submit" title="Add a new list!">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </div>
      </form>
      {errorExists && errorMessage}
    </>
  );
};

export default AsideForm;
