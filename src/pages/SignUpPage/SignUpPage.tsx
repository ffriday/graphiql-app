import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../providers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-up.module.scss";
import { signUpSchema } from "../../constants/signUpValidation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../../components/MessageSnaсkbar/MessageSnackbar";
import { SignUpCredentials } from "../../auth/types";

export const SignUpPage = () => {
  const { handleSignUp, error, isError } = useAuth();
  const { language } = useAppContext();
  const {
    signUp,
    passwordPlaceholder,
    anotherPasswordPlacehoder,
    passwordMaxLength,
    passwordIsRequired,
    passwordLength,
    passwordsDoNotMatch,
    emailIsRequired,
    emailValid,
    passwordRequirements,
  } = lang[language as keyof typeof LANGUAGES];
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      signUpSchema(
        passwordMaxLength,
        passwordIsRequired,
        passwordLength,
        passwordsDoNotMatch,
        passwordRequirements,
        emailIsRequired,
        emailValid,
      ),
    ),
  });

  const onSubmit = ({ email, password }: SignUpCredentials) => {
    handleSignUp({ email, password });
    reset();
  };

  return (
    <div className={styles["container-auth"]}>
      <h2>{signUp}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="E-mail"
          {...register("email")}
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email?.message ?? ""}
        />
        <TextField
          type="password"
          placeholder={passwordPlaceholder}
          {...register("password")}
          variant="outlined"
          error={Boolean(errors.password)}
          helperText={errors.password?.message ?? ""}
        />
        <TextField
          type="password"
          placeholder={anotherPasswordPlacehoder}
          {...register("passwordConfirmation")}
          variant="outlined"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message ?? ""}
        />
        <div className={styles["button-container"]}>
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            color="success"
            fullWidth={true}
          >
            {signUp}
          </Button>
        </div>
      </form>
      <MessageSnackbar
        isOpen={isError}
        message={error?.message ?? ""}
        severity="error"
      />
    </div>
  );
  // );
};
