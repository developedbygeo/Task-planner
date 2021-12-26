import { useRef, useContext } from 'react';
import { TaskContext } from '../../store/taskContext';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import styles from './AsideForm.module.css';

const AsideForm = ({ onFormReset }) => {
  const TaskCtx = useContext(TaskContext);
  const listRef = useRef();

  const submitHandler = (e) => {
    const newList = listRef.current.value;
    e.preventDefault();
    if (newList.trim().length > 0) {
      TaskCtx.addList(newList);
      onFormReset([listRef]);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.asideForm}>
      <div key={_.uniqueId()}>
        <Search required ref={listRef} placeholder={`Let's add a list!`} />
      </div>
      <div>
        <Button type="submit" title="Add a new list!">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </form>
  );
};

export default AsideForm;
