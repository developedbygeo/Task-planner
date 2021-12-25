import styles from './Card.module.css';

const Card = ({ className, children, title }) => {
  return (
    <div className={`${styles.card} ${className}`} title={title}>
      {children}
    </div>
  );
};

export default Card;
