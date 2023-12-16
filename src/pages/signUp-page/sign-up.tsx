import { useTranslate } from "../../hooks/useTranslate";

export const SignUpPage = () => {
  const translate = useTranslate();
  const signUp = translate("signUp");
  return (
    <>
      <h1>{signUp}</h1>
    </>
  );
};
