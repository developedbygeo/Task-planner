import Search from '../UI/Search/Search';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import styles from './AsideForm.module.css';

const AsideForm = ({ onAddList }) => {
  return (
    <form onSubmit={onAddList} className={styles.asideForm}>
      <div key={uniqid()}>
        <Search placeholder={`Let's add a list!`} />
      </div>
      <div>
        <Button>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </form>
  );
};

export default AsideForm;
