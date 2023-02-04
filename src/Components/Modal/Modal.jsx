import "./modal.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} onClick={() => handleClose()}>
      <section style={{ zIndex: 1000 }} className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;
