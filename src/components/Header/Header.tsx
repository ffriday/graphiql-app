import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES, LangPages } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import styles from "./Header.module.scss";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../MessageSnaсkbar/MessageSnackbar";
import { useTranslate } from "../../hooks";
import Modal from "../Modal/Modal";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import ToggleAuthButton from "../ToggleAuthButton/ToggleAuthButton";

export const Header = () => {
  const { userId } = useContext(AuthContext);
  const { handleLogOut } = useAuth();
  const [isSignOut, setIsSignOut] = useState(false);
  const translate = useTranslate(LangPages.header);
  const translateSystem = useTranslate(LangPages.shared);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsSignUpOpen(false);
  };
  const handleSignUpOpen = () => setIsSignUpOpen(!isSignUpOpen);

  const navigate = useNavigate();

  const handlerClickLogOut = () => {
    if (userId) {
      handleModalClose();
      handleLogOut();
      setIsSignOut(true);
      navigate("/");
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const headerClasses = [styles.header];
  if (scrolled) {
    headerClasses.push(styles.scrolled);
  }

  return (
    <header className={headerClasses.join(" ")}>
      <nav className={styles.navigation}>
        {!userId ? (
          <>
            <NavLink to={APP_ROUTES.WELCOME}>{translate(`welcome`)}</NavLink>
            <div onClick={handleModalOpen} className={styles["header-button"]}>
              {translate("signIn")}
            </div>
            <div onClick={handleModalOpen} className={styles["header-button"]}>
              GraphQl
            </div>
          </>
        ) : (
          <>
            <NavLink to={APP_ROUTES.WELCOME}>{translate("welcome")}</NavLink>
            <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
          </>
        )}
      </nav>
      {userId && (
        <div onClick={handlerClickLogOut} className={styles["header-button"]}>
          {translate("signOut")}
        </div>
      )}
      <LanguageSelector />
      <MessageSnackbar
        isOpen={isSignOut}
        message={translateSystem("logOutSuccess")}
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
