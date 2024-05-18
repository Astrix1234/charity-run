import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: yup.string().required('Required field'),
  newPassword: yup
    .string()
    .required('Required field')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{8,}$/,
      'Min 8 chars, incl. uppercase, number & symbol'
    ),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required('Required field'),
});
