import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useAppContext } from "../../providers/LangProvider";
import styles from "./Header.module.scss";
import { LANGUAGES, lang } from "../../constants/lang";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../MessageSnaсkbar/MessageSnackbar";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import Modal from "../Modal/Modal";
import ToggleAuthButton from "../ToggleAuthButton/ToggleAuthButton";

export const Header = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const { handleLogOut } = useAuth();
  const { language } = useAppContext();
  const { signOut, signIn, welcome, logOutSuccess } =
    lang[language as keyof typeof LANGUAGES];
  const [isSignOut, setIsSignOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSignUpOpen(false);
  };
  const handleSignUpOpen = () => setIsSignUpOpen(!isSignUpOpen);

  const handlerClickLogOut = () => {
    if (userId) {
      handleModalClose();
      handleLogOut();
      setIsSignOut(true);
      navigate("/");
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        {!userId ? (
          <>
            <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
            <div onClick={handleModalOpen} className={styles["header-button"]}>
              {signIn}
            </div>
            <div onClick={handleModalOpen} className={styles["header-button"]}>
              GraphQl
            </div>
          </>
        ) : (
          <>
            <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
            <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
          </>
        )}
      </nav>
      {userId && (
        <div onClick={handlerClickLogOut} className={styles["header-button"]}>
          {signOut}
        </div>
      )}
      <LanguageSelector />
      <MessageSnackbar
        isOpen={isSignOut}
        message={logOutSuccess}
        severity="success"
      />
      {!userId && (
        <Modal open={isModalOpen} onClose={handleModalClose}>
          {isSignUpOpen && <SignUpPage />}
          {!isSignUpOpen && <SignInPage />}
          <ToggleAuthButton
            isSignUpOpen={isSignUpOpen}
            onClick={handleSignUpOpen}
          />
        </Modal>
      )}
    </header>
  );
};
