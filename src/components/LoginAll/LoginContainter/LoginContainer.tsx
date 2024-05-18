import { useFormik } from 'formik';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import AccountCta from '../../Share/AccountCta/AccountCta';
import { Button } from '../../Share/Button/Button';
import scss from './LoginContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import FormInput from '../../Share/FormInput/FormInput';
import { useNavigate } from 'react-router';
import { useIsLoginStore } from '../../../Zustand/useIsLoginStore';
import { login } from '../../../Zustand/api';
import { useIsLoadingStore } from '../../../Zustand/useIsLoadingStore';
import { toast } from 'react-toastify';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import { useState } from 'react';
import TogglePasswordVisibilityButton from '../../Share/TogglePasswordVisibilityButton/TogglePasswordVisibilityButton';
import InputColContainer from '../../Share/InputColContainer/InputColContainer';

function LoginContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLoading } = useIsLoadingStore();
  const { setIsLogin } = useIsLoginStore();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      const { email, password } = values;
      const loginUser = async () => {
        try {
          setIsLoading(true);
          await login(email, password);
          toast.info('Login successful!');
          setIsLogin(true);
          navigate('/');
        } catch (error: unknown) {
          if (
            typeof error === 'object' &&
            error !== null &&
            'response' in error &&
            typeof error.response === 'object' &&
            error.response !== null &&
            'status' in error.response &&
            'data' in error.response
          ) {
            const axiosError = error as {
              response: { status: number; data: { message: string } };
            };
            if (axiosError.response.status === 401) {
              toast.error(axiosError.response.data.message);
            } else {
              toast.error('An error occurred during login.');
            }
          }
        } finally {
          setIsLoading(false);
        }
      };
      loginUser();
      formik.resetForm();
    },
  });

  return (
    <InputColContainer>
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
          <>
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="login-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <TogglePasswordVisibilityButton
              password={formik.values.password}
              isVisible={passwordVisible}
              toggleVisibility={() => setPasswordVisible(prev => !prev)}
            />
          </>
        </FormInput>
        <ForgotPassword />
        <Button
          type="submit"
          content={t.button}
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
      <AccountCta type="register" />
    </InputColContainer>
  );
}

export default LoginContainer;
