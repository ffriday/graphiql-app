import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-up.module.scss";
import { signUpSchema } from "../../constants/signUpValidation";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../auth/useAuth";

interface ISignUpData {
  email: string;
  password: string;
  anotherPassword: string;
}
export const SignUpPage = () => {
  const { handleSignUp } = useAuth();

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
  } = lang[language as keyof typeof LANGUAGES];
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(
      signUpSchema(
        passwordMaxLength,
        passwordIsRequired,
        passwordLength,
        passwordsDoNotMatch,
        emailIsRequired,
        emailValid,
      ),
    ),
  });

  const onSubmit = (data: ISignUpData) => {
    handleSignUp({ email: data.email, password: data.password });
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{signUp}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="E-mail"
          {...register("email")}
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email?.message || ""}
        />
        <TextField
          type="password"
          placeholder={passwordPlaceholder}
          {...register("password")}
          variant="outlined"
          error={Boolean(errors.password)}
          helperText={errors.password?.message || ""}
        />
        <TextField
          type="password"
          placeholder={anotherPasswordPlacehoder}
          {...register("anotherPassword")}
          variant="outlined"
          error={!!errors.anotherPassword}
          helperText={errors.anotherPassword?.message || ""}
        />
        <div>
          <Button
            type="submit"
            disabled={!isValid}
            variant="contained"
            color="success"
          >
            {signUp}
          </Button>
        </div>
      </form>
    </div>
  );
};
