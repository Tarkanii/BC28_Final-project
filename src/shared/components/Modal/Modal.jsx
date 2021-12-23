import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import CloseBtn from "./CloseBtn";
import PropTypes from "prop-types";

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const handleClickOpen = (e) => {
    if (
      e.target.id === "backdrop" ||
      e.target.nodeName === "svg" ||
      e.target.nodeName === "path"
    ) {
      closeModal();
    }
  };

  return (
    <div className={styles.backdrop} id="backdrop" onClick={handleClickOpen}>
      <div className={styles.overlay} onClick={handleClickOpen}>
        <div className={styles.close} onClick={handleClickOpen}>
          <CloseBtn />
        </div>
        <div className={styles.modalMain} onClick={handleClickOpen}>
          {children}
        </div>
      </div>
    </div>
  );
};
Modal.defaultProps = {
  closeModal: () => {},
};
Modal.propTypes = {
  closeModal: PropTypes.func,
};

export default Modal;
