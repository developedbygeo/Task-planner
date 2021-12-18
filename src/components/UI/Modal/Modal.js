import styles from './Modal.module.css';
import reactDom from 'react-dom';

const modalCont = document.querySelector('#overlay');

const Backdrop = ({ onMenuDisable }) => {
  return <div className={styles.backdrop} onClick={onMenuDisable} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onMenuDisable, children }) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onMenuDisable={onMenuDisable} />,
        modalCont
      )}
      {reactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalCont
      )}
    </>
  );
};

export default Modal;
