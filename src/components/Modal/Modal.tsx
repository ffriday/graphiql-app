import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal as ModalUI } from "@mui/base/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.scss";

type modalType = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose, ...props }: modalType) => {
  console.log(open);

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
        <Box className={styles["modal-container"]}>
          <IconButton
            onClick={onClose}
            color="secondary"
            aria-label="delete"
            className={styles["modal-close-btn"]}
          >
            <CloseIcon />
          </IconButton>
          <div>{children}</div>
        </Box>
      </Fade>
    </ModalUI>
  );
};

export default Modal;
