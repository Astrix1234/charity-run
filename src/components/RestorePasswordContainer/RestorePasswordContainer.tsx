import { FormikValues, useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import FormInput from '../FormInput/FormInput';
import scss from './RestorePasswordContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import { Button } from '../Button/Button';
import InputColContainer from '../InputColContainer/InputColContainer';
import { toast } from 'react-toastify';
import { resetPassword } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { useNavigate } from 'react-router';

function RestorePasswordContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLoading } = useIsLoadingStore();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      const resetUserPassword = async () => {
        try {
          setIsLoading(true);
          await resetPassword(values.email);
          toast.info(
            'Congratulations! Our message should appear in your inbox shortly.'
          );
          navigate('/login');
        } catch (error: unknown) {
          toast.error('Incorrect email address. Please try again.');
          console.error('Error resetting password:', error);
        } finally {
          setIsLoading(false);
        }
      };
      resetUserPassword();
      formik.resetForm();
    },
  });
  return (
    <InputColContainer>
      <h2 className={scss.heading}>{t.heading}</h2>
      <p className={scss.sub}>{t.sub}</p>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          label={t.email}
          error={{
            condition: Boolean(formik.touched.email && formik.errors.email),
            message: String(formik.errors.email),
          }}
        >
          <input
            name="email"
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </FormInput>
        <Button
          disabled={
            !formik.values.email ||
            Boolean(formik.touched.email && formik.errors.email)
          }
          type="submit"
          content={t.button}
        />
      </form>
    </InputColContainer>
  );
}

export default RestorePasswordContainer;
