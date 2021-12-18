import styles from './Modal.module.css';
import reactDom from 'react-dom';

const modalCont = document.querySelector('#overlay');

const Backdrop = ({ onMenuDisable }) => {
  return <div className={styles.backdrop} onClick={onMenuDisable} />;
};

const ModalOverlay = ({ children, className }) => {
  return (
    <div className={`${styles.modal} ${className ? className : null}`}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onMenuDisable, className, children }) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onMenuDisable={onMenuDisable} />,
        modalCont
      )}
      {reactDom.createPortal(
        <ModalOverlay className={className}>{children}</ModalOverlay>,
        modalCont
      )}
    </>
  );
};

export default Modal;
