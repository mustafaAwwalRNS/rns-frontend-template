import { string, object } from "yup";

export const validationMessages = {
  email: {
    required: "Email is required",
    email: "Email is not of proper format",
  },
  password: {
    required: "Password is required",
    minLength: "Password minimum length should be 8",
  },
};

export const loginCredentialValidationSchema = object().shape({
  email: string()
    .email(validationMessages.email.email)
    .required(validationMessages.email.required),
  password: string()
    .required(validationMessages.password.required)
    .min(8, validationMessages.password.minLength),
});
