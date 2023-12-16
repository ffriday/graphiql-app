import { useTranslate } from "../../providers/TranslateProvider";

export const SignUpPage = () => {
  const translate = useTranslate();
  const signUp = translate("signUp");
  return (
    <>
      <h1>{signUp}</h1>
    </>
  );
};
