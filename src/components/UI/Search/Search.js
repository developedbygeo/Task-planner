import React from 'react';
import styles from './Search.module.css';

const Search = React.forwardRef(
  ({ className, onChange, placeholder, id }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={`${styles.inputField} ${className ? className : ''}`}
          onChange={onChange}
          id={id ? id : null}
          type="text"
          placeholder={placeholder}
        ></input>
      </>
    );
  }
);

export default Search;
