import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorInfo from "../../components/FormErrorInfo/ErrorInfo";
import styles from "./sign-in.module.scss";
import { signInSchema } from "../../constants/signInValidation";
import { useContext } from "react";
import { AuthContext } from "../../provisers/AuthProviders";

interface ISignInData {
  email: string;
  password: string;
}

export const SignInPage = () => {
  const { handleLoginWithGoogle, handleLoginWithCredentials } =
    useContext(AuthContext);
  const { language } = useAppContext();
  const { signIn } = lang[language as keyof typeof LANGUAGES];
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data: ISignInData) => {
    console.log(data);
    handleLoginWithCredentials(data.password, data.email);
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{signIn}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="E-mail" {...register("email")} />
        <ErrorInfo errors={errors.email} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <ErrorInfo errors={errors.password} />
        <button type="submit" disabled={!isValid}>
          {signIn}
        </button>
        <button type="button" onClick={handleLoginWithGoogle}>
          {" "}
          Google{" "}
        </button>
      </form>
    </div>
  );
};
