import styles from './Search.module.css';

const Search = ({ className, onChange }) => {
  return (
    <>
      <input
        className={`${styles.inputField} ${className ? className : ''}`}
        onChange={onChange}
        type="text"
        placeholder="What are we looking for?"
      ></input>
    </>
  );
};

export default Search;
