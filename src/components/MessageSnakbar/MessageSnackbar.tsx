import { Alert, AlertColor, Snackbar } from "@mui/material";

interface IMessageSnackbar {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  onClose: () => void;
}

const MessageSnackbar = ({
  open,
  message,
  severity,
  onClose,
}: IMessageSnackbar) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackbar;
