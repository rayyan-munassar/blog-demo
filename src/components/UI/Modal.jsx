
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.Modal}>
        <h1 className={classes.ModalTitle}>{props.title}</h1>
        <div className={classes.ModalContent}>
          <span onClick={props.onClose} className={classes.close}>
            &times;
          </span>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
