import styles from './Button.module.css';

const Button = ({ onClick, type, title, additionalClass, children }) => {
  return (
    <>
      <button
        title={title}
        onClick={onClick}
        type={type || 'button'}
        className={`${styles.button} ${additionalClass}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
