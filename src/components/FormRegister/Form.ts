import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Required field'),
  lastName: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Required field'),
  number: Yup.string()
    .matches(/^[0-9]{9}$/, 'Invalid phone number')
    .required('Required field'),
  email: Yup.string().email('Invalid email format').required('Required field'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{6,12}$/,
      'Password should contain 6-12 characters, including uppercase, number and symbol'
    )
    .required('Required field'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required field'),
  tshirt: Yup.string().oneOf(['S', 'M', 'L']).required('Required field'),
  tshirtType: Yup.string()
    .oneOf(['tshirtTypeFemale', 'tshirtTypeMale', 'tshirtTypeChild'])
    .required('Required field'),
});
