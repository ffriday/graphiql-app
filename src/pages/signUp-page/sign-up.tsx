import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorInfo from "../../components/FormErrorInfo/ErrorInfo";
import styles from "./sign-in.module.scss";
import { signUpSchema } from "../../constants/signUpValidation";

interface ISignUpData {
  email: string;
  password: string;
  anotherPassword: string;
}
export const SignUpPage = () => {
  const { language } = useAppContext();
  const { signUp } = lang[language as keyof typeof LANGUAGES];
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = (data: ISignUpData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container-auth">
      <h2>{signUp}</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="E-mail" {...register("email")} />
        <ErrorInfo errors={errors.email} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <ErrorInfo errors={errors.password} />
        <input
          type="password"
          placeholder="Password"
          {...register("anotherPassword")}
        />
        <ErrorInfo errors={errors.anotherPassword} />
        <button type="submit" disabled={!isValid}>
          {signUp}
        </button>
      </form>
    </div>
  );
};
