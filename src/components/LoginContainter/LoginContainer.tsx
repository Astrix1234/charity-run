import { FormikProps, FormikValues, useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import AccountCta from '../AccountCta/AccountCta';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import scss from './LoginContainer.module.scss';
import translations from './translations';
import * as yup from 'yup';

function LoginContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Podaj właściwy adres e-mail')
      .required('Pole wymagane'),
    password: yup
      .string()
      .min(5, 'Twoje hasło musi być dłuższe niż 5 liter')
      .required('Pole wymagane'),
  });
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      console.log('onSumbit', values);
      actions.resetForm();
    },
    validationSchema: schema,
  });

  return (
    <div className={scss.container}>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.email}
          id="login-email"
          name="email"
        />
        <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.password}
          id="login-password"
          name="password"
        />

        <Button type="submit" content={t.button} onClick={() => {}} />
      </form>
      <AccountCta type="register" />
    </div>
  );
}

export default LoginContainer;
