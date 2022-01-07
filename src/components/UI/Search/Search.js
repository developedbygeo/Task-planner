import React from 'react';
import styles from './Search.module.css';

const Search = React.forwardRef(
  ({ className, onChange, onFocus, placeholder, id, required }, ref) => {
    return (
      <>
        <input
          required={required}
          ref={ref}
          className={`${styles.inputField} ${className ? className : null}`}
          onChange={onChange}
          onFocus={onFocus}
          id={id ? id : null}
          type="text"
          placeholder={placeholder}
        ></input>
      </>
    );
  }
);

export default Search;
