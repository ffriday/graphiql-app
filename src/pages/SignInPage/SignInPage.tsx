import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../providers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-in.module.scss";
import { signInSchema } from "../../constants/signInValidation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../../components/MessageSnaсkbar/MessageSnackbar";
import { Credentials } from "../../auth/types";

export const SignInPage = () => {
  const { googleLogin, handleSignIn, error, isError } = useAuth();
  const { language } = useAppContext();
  const {
    signIn,
    passwordPlaceholder,
    passwordMaxLength,
    passwordIsRequired,
    passwordLength,
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
      signInSchema(
        passwordMaxLength,
        passwordIsRequired,
        passwordLength,
        passwordRequirements,
        emailIsRequired,
        emailValid,
      ),
    ),
  });

  const onSubmit = ({ email, password }: Credentials) => {
    handleSignIn({ email, password });
    reset();
  };

  return (
    <div className={styles["container-auth"]}>
      <h2>{signIn}</h2>
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
        <Button
          type="submit"
          disabled={!isValid}
          variant="contained"
          color="success"
        >
          {signIn}
        </Button>
        <Button type="button" onClick={() => googleLogin()} variant="contained">
          Google
        </Button>
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
