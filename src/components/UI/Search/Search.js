import styles from './Search.module.css';

const Search = ({ className, onChange, placeholder }) => {
  return (
    <>
      <input
        className={`${styles.inputField} ${className ? className : ''}`}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Search;
