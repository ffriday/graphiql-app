import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./sign-in.module.scss";
import { signInSchema } from "../../constants/signInValidation";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provisers/AuthProviders";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";

interface ISignInData {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const { status, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const { handleLoginWithGoogle, handleLoginWithCredentials } =
    useContext(AuthContext);
  const { language } = useAppContext();
  const { signIn, passwordPlaceholder } =
    lang[language as keyof typeof LANGUAGES];
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });
  useEffect(() => {
    if (status === "authenticated" && userId) {
      navigate(`/${APP_ROUTES.GRAPHIQL}`);
    }
  }, [status, navigate, userId]);
  const onSubmit = (data: ISignInData) => {
    handleLoginWithCredentials(data.password, data.email);
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{signIn}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="E-mail"
          {...register("email")}
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message || ""}
        />
        <TextField
          type="password"
          placeholder={passwordPlaceholder}
          {...register("password")}
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password?.message || ""}
        />
        <Button
          type="submit"
          disabled={!isValid}
          variant="contained"
          color="success"
        >
          {signIn}
        </Button>
        <Button
          type="button"
          onClick={handleLoginWithGoogle}
          variant="contained"
        >
          Google
        </Button>
      </form>
    </div>
  );
};
