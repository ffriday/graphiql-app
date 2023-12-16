import { useTranslate } from "../../providers/TranslateProvider";

export const SignInPage = () => {
  const translate = useTranslate();
  const signIn = translate("signIn");
  return (
    <>
      <h1>{signIn}</h1>
    </>
  );
};
