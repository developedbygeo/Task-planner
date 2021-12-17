import Button from '../Button/Button';
import Search from '../Search/Search';
import styles from './Form.module.css';
import uniqid from 'uniqid';

const Form = ({
  className,
  buttonClassName,
  onSubmit,
  isFieldActive,
  formData,
  children,
  type,
}) => {
  const inputLayout = formData.map(({ labelStatus, label, placeholder }) => (
    <div key={uniqid()} className={labelStatus ? styles.flex : null}>
      {labelStatus && <label>{label}</label>}
      <Search className={styles.search} placeholder={placeholder} />
    </div>
  ));

  return (
    <form onSubmit={onSubmit} className={className}>
      {isFieldActive && inputLayout}
      <Button
        className={`${styles.btn} ${buttonClassName ? buttonClassName : null}`}
        type={type}
      >
        {children}
      </Button>
    </form>
  );
};

export default Form;
