// import React from "react";
import styles from "./Toast.module.css";
import {
  SuccessIcon,
  ErrorIcon,
  InfoIcon,
  WarningIcon,
  CloseIcon,
} from "./Icons";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  key: number;
  heading: string;
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast = ({ key, heading, message, type, onClose }: ToastProps) => {
  const iconMap = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
    warning: <WarningIcon />,
  };

  const classMap = {
    success: styles.toastSuccess,
    error: styles.toastError,
    info: styles.toastInfo,
    warning: styles.toastWarning,
  };

  return (
    <>
      <div
        className={`${styles.toast} ${classMap[type]}`}
        role="alert"
        key={key}
      >
        <div className={styles.toastContent}>
          <div className={styles.toastIcon}>{iconMap[type]}</div>
          <div className={styles.toastText}>
            <p className={styles.toastHeading}>{heading}</p>
            <p>{message}</p>
          </div>
        </div>
        <button className={styles.toastCloseBtn} onClick={onClose}>
          <span className="icon">
            <CloseIcon />
          </span>
        </button>
      </div>
    </>
  );
};

export default Toast;
