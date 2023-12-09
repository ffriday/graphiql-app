import { object, string } from "yup";

export const signInSchema = object({
  email: string().email().required(),
  password: string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character.",
    ),
});
