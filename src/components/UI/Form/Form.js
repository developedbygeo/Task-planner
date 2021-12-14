import Button from '../Button/Button';
import Search from '../Search/Search';
import styles from './Form.module.css';

const Form = ({ onSubmit, isFieldActive, children, placeholder, type }) => {
  return (
    <form onSubmit={onSubmit}>
      {isFieldActive && (
        <Search className={styles.search} placeholder={placeholder} />
      )}
      <Button type={type}>{children}</Button>
    </form>
  );
};

export default Form;
