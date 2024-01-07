import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-in.module.scss";
import { LangPages, signInSchema } from "../../constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../../components/MessageSnaсkbar/MessageSnackbar";
import { useTranslate } from "../../hooks";
import { Credentials } from "../../auth/types";

export const SignInPage = () => {
  const { googleLogin, handleSignIn, error, isError } = useAuth();
  const translateSystem = useTranslate(LangPages.shared);
  const translate = useTranslate(LangPages.signing);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      signInSchema(
        translateSystem("passwordMaxLength"),
        translateSystem("passwordIsRequired"),
        translateSystem("passwordLength"),
        translateSystem("passwordRequirements"),
        translateSystem("emailIsRequired"),
        translateSystem("emailValid"),
      ),
    ),
  });

  const onSubmit = ({ email, password }: Credentials) => {
    handleSignIn({ email, password });
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{translate("signIn")}</h2>
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
          placeholder={translateSystem("passwordPlaceholder")}
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
          {translate("signIn")}
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
};
