import styles from './Modal.module.css';
function Modal({ message, onClose }) {
    return (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <p>{message}</p>
        </div>
      </div>
    );
  }

  export default Modal;