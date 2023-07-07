import classes from "./InvalidModal.module.css";

const InvalidModal = ({ onCancel }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onCancel} />
      <dialog open className={classes.modal}>
        <div>
          <h2>Something is wrong, please put legal information</h2>
        </div>
        <button onClick={onCancel}>Ok</button>
      </dialog>
    </>
  );
};

export default InvalidModal;
