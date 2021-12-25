import React from 'react';
import styles from './Select.module.css';

const Select = React.forwardRef(({ className }, ref) => {
  return (
    <>
      <select
        required={true}
        className={`${styles.select} ${className ? className : null}`}
        ref={ref}
        defaultValue={'low'}
      >
        <option value={'default'} disabled={true}>
          Please select the tasks's priority
        </option>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
    </>
  );
});

export default Select;
