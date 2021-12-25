import { useEffect } from "react";
import { createPortal } from "react-dom";
import Chart from "./Chart";
import { CloseBtn } from "../Modal/CloseBtn";
import PropTypes from "prop-types";
import styles from "./Chart.module.scss";

const modalRoot = document.querySelector("#root");

function ChartModal({ onClose, sprint }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const handleOnBtnClick = () => onClose();

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.chart}>
        <CloseBtn className={styles.CloseBtn} onClick={handleOnBtnClick} />
        <Chart sprint={sprint} />
      </div>
    </div>,
    modalRoot
  );
}

ChartModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default ChartModal;
