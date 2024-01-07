import { LangPages } from "../../constants";
import { useTranslate } from "../../hooks";
import styles from "./ToggleAuthButton.module.scss";

type ToggleAuthButtonProps = {
  isSignUpOpen: boolean;
  onClick: () => void;
};

const ToggleAuthButton = ({ isSignUpOpen, onClick }: ToggleAuthButtonProps) => {
  const translateSignIn = useTranslate(LangPages.signing);
  const translateSignUp = useTranslate(LangPages.sighup);

  return (
    <div>
      {isSignUpOpen
        ? translateSignUp("alreadyHaveAccount")
        : translateSignIn("noAccount")}
      <span onClick={onClick} className={styles.link}>
        {isSignUpOpen
          ? translateSignUp("signIn")
          : translateSignIn("createOne")}
      </span>
    </div>
  );
};

export default ToggleAuthButton;
