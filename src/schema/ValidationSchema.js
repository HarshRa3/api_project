import * as Yup from "yup";
export const SignUpValidation = Yup.object({
  username: Yup.string()
    .min(3, "Username should be in 3 Letter")
    .max(25)
    .required("Please Enter Your Username"),email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, "password must be 6 letter")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one lowercase letter and one digit"
    )
    .required("Please Enter Your Password"),
});
