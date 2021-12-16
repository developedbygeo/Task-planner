import styles from './Button.module.css';

const Button = ({ onClick, type, title, className, children }) => {
  return (
    <>
      <button
        title={title}
        onClick={onClick}
        type={type || 'button'}
        className={`${styles.button} ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
