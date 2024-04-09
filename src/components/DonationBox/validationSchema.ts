import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required field'),
  amount: yup
    .number()
    .positive('Must be a positive number')
    .integer('Must be an integer'),
});
