import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useAppContext } from "../../providers/LangProvider";
import "./Header.css";
import { LANGUAGES, lang } from "../../constants/lang";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../MessageSnaсkbar/MessageSnackbar";
import Modal from "../Modal/Modal";
import { SignInPage } from "../../pages/SignInPage/SignInPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";

export const Header = () => {
  const { userId } = useContext(AuthContext);
  const { handleLogOut } = useAuth();
  const { language } = useAppContext();
  const {
    signOut,
    // signIn, signUp,
    welcome,
    logOutSuccess,
  } = lang[language as keyof typeof LANGUAGES];
  const [isSignOut, setIsSignOut] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleSignUpOpen = () => setIsSignUpOpen(!isSignUpOpen);
  // const handleSignInOpen = () => setIsSignUpOpen(isSignUpOpen);

  const handlerClickLogOut = () => {
    if (userId) {
      handleLogOut();
      setIsSignOut(true);
    }
  };

  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
        {!userId && (
          <>
            <button type="button" onClick={handleModalOpen}>
              Open modal
            </button>

            {/* <NavLink to={APP_ROUTES.SIGNIN}>{signIn}</NavLink> */}

            {/* <NavLink to={APP_ROUTES.SIGNUP}>{signUp}</NavLink> */}
          </>
        )}
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      {userId && <button onClick={handlerClickLogOut}>{signOut}</button>}
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
          <button onClick={handleSignUpOpen}>
            {isSignUpOpen
              ? "No account? Create one"
              : "Already have an account? Sign in"}
          </button>
        </Modal>
      )}
    </header>
  );
};
