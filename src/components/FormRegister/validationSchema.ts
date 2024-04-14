import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Required field'),
  surname: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 30 characters')
    .required('Required field'),
  email: Yup.string().email('Invalid email format').required('Required field'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{8,}$/,
      'Min 8 chars, incl. uppercase, number & symbol'
    )
    .required('Required!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required field'),
  agreementStatements: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions.')
    .required('You must accept the terms and conditions.'),
});
