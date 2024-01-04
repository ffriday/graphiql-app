import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as ModalUI } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose, ...props }: ModalProps) => {
  return (
    <ModalUI
      {...props}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
    >
      <Fade in={open}>
        <Box className={styles["modal"]}>
          <div onClick={onClose} className={styles["modal-close-btn"]}>
            <CloseIcon />
          </div>
          <div className={styles["modal-container"]}>{children}</div>
        </Box>
      </Fade>
    </ModalUI>
  );
};

export default Modal;
