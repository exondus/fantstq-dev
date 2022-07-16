import yup, { object, string } from 'yup';

export const loginSchema = object({
  email: string().email().required('Please enter your email.'),
  password: string().min(6).required('Please enter your password.'),
});

export const registerSchema = object({
  username: string().required('Please enter your username.'),
  fullName: string().required('Please enter your full name.'),
  email: string().email().required('Please enter your email.'),
  password: string().min(6).required('Please enter your password.'),
  confirmPassword: string()
    .min(6)
    .required('Please enter your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
});

export const forgotSchema = object({
  email: string().email().required('Please enter your email.'),
});
