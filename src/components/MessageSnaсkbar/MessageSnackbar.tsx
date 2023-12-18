import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

type MessageSnackbarProps = {
  isOpen: boolean;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
};

const MessageSnackbar = ({
  isOpen,
  message,
  severity,
  autoHideDuration = 2000,
}: MessageSnackbarProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackbar;
