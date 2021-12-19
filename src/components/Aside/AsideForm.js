import { useRef } from 'react';
import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import styles from './AsideForm.module.css';

const AsideForm = ({ onAddList }) => {
  const listRef = useRef();

  const submitHandler = (e) => {
    const newList = listRef.current.value;
    e.preventDefault();
    if (newList.trim().length > 0) {
      onAddList(listRef.current.value);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.asideForm}>
      <div key={uniqid()}>
        <Search required ref={listRef} placeholder={`Let's add a list!`} />
      </div>
      <div>
        <Button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </form>
  );
};

export default AsideForm;
