import styles from './Modal.module.css';
import reactDom from 'react-dom';

const modalCont = document.querySelector('#overlay');

const Backdrop = (props) => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, modalCont)}
      {reactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalCont
      )}
    </>
  );
};

export default Modal;
