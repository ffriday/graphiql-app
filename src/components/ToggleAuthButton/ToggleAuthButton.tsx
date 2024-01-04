import { useAppContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../constants/lang";
import styles from "./ToggleAuthButton.module.scss";

type ToggleAuthButtonProps = {
  isSignUpOpen: boolean;
  onClick: () => void;
};

const ToggleAuthButton = ({ isSignUpOpen, onClick }: ToggleAuthButtonProps) => {
  const { language } = useAppContext();
  const { signIn, alreadyHaveAccount, noAccount, createOne } =
    lang[language as keyof typeof LANGUAGES];

  return (
    <div>
      {isSignUpOpen ? alreadyHaveAccount : noAccount}
      <span onClick={onClick} className={styles.link}>
        {isSignUpOpen ? signIn : createOne}
      </span>
    </div>
  );
};

export default ToggleAuthButton;
