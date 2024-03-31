import { useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import AccountCta from '../AccountCta/AccountCta';
import { Button } from '../Button/Button';
import scss from './LoginContainer.module.scss';
import translations from './translations';
import { validationSchema } from './Schema';
import FormInput from '../FormInput/FormInput';
import { useNavigate } from 'react-router';

function LoginContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      console.log('onSumbit', values);
      actions.resetForm();
    },
    validationSchema: validationSchema,
  });

  console.log(formik.errors.email);
  console.log(formik.touched.email);

  const handleNavigate = () => {
    navigate('/register');
  };

  return (
    <div className={scss.container}>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <FormInput
          error={{
            condition: Boolean(formik.touched.email && formik.errors.email),
            message: String(formik.errors.email),
          }}
          label={t.email}
          id="login-email"
        >
          <input
            type="text"
            name="email"
            id="login-email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </FormInput>
        <FormInput
          label={t.password}
          id="login-password"
          error={{
            condition: Boolean(
              formik.touched.password && formik.errors.password
            ),
            message: String(formik.errors.password),
          }}
        >
          <input
            type="text"
            name="password"
            id="login-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </FormInput>
        {/* <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.email}
          id="login-email"
          name="email"
        /> */}
        {/* <Input
          formik={formik as unknown as FormikProps<FormikValues>}
          label={t.password}
          id="login-password"
          name="password"
        /> */}

        <Button type="submit" content={t.button} onClick={() => {}} />
      </form>
      <AccountCta type="register" onClick={handleNavigate} />
    </div>
  );
}

export default LoginContainer;
