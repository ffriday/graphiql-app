import { object, ref, string } from "yup";

export const signUpSchema = (
  passwordMaxLength: string,
  passwordIsRequired: string,
  passwordLength: string,
  passwordsDoNotMatch: string,
  passwordRequirements: string,
  emailIsRequired: string,
  emailValid: string,
) => {
  return object({
    email: string().email(emailValid).required(emailIsRequired),
    password: string()
      .required(passwordIsRequired)
      .min(8, passwordLength)
      .max(12, passwordMaxLength)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
        passwordRequirements,
      ),
    anotherPassword: string()
      .required(passwordIsRequired)
      .min(8, passwordLength)
      .max(12, passwordMaxLength)
      .oneOf([ref("password")], passwordsDoNotMatch),
  });
};
