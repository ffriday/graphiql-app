import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-up.module.scss";
import { LangPages, signUpSchema } from "../../constants";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../../components/MessageSnaсkbar/MessageSnackbar";
import { useTranslate } from "../../hooks";
import { SignUpCredentials } from "../../auth/types";

export const SignUpPage = () => {
  const { handleSignUp, error, isError } = useAuth();
  const translateSystem = useTranslate(LangPages.shared);
  const translate = useTranslate(LangPages.sighup);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      signUpSchema(
        translateSystem("passwordMaxLength"),
        translateSystem("passwordIsRequired"),
        translateSystem("passwordLength"),
        translateSystem("passwordsDoNotMatch"),
        translateSystem("passwordRequirements"),
        translateSystem("emailIsRequired"),
        translateSystem("emailValid"),
      ),
    ),
  });

  const onSubmit = ({ email, password }: SignUpCredentials) => {
    handleSignUp({ email, password });
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{translate("signUp")}</h2>
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
        <TextField
          type="password"
          placeholder={translateSystem("anotherPasswordPlacehoder")}
          {...register("passwordConfirmation")}
          variant="outlined"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message ?? ""}
        />
        <div>
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            color="success"
          >
            {translate("signUp")}
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
};
