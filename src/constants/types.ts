export type Credentials = {
  email: string;
  password: string;
};

export type SignUpCredentials = Credentials & {
  passwordConfirmation: string;
};

export type AuthResource = {
  googleLogin: () => void;
  handleSignIn: (credentials: Credentials) => void;
  handleSignUp: (credentials: Credentials) => void;
  handleLogOut: () => void;
  isError: boolean;
  error: Error | null;
};

export type AuthState = {
  userId: string | null;
};
