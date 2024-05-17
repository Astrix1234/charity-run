import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Required field'),
  password: yup.string().required('Required field'),
});
