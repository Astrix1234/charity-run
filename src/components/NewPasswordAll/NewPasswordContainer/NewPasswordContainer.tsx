import { useFormik } from 'formik';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import InputColContainer from '../../Share/InputColContainer/InputColContainer';
import scss from './NewPasswordContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import FormInput from '../../Share/FormInput/FormInput';
import { useState } from 'react';
import TogglePasswordVisibilityButton from '../../Share/TogglePasswordVisibilityButton/TogglePasswordVisibilityButton';
import { Button } from '../../Share/Button/Button';
import AccountCta from '../../Share/AccountCta/AccountCta';
import { toast } from 'react-toastify';
import { updateUserDetails } from '../../../Zustand/api';
import { useIsLoadingStore } from '../../../Zustand/useIsLoadingStore';
import { useNavigate } from 'react-router-dom';

function NewPasswordContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLoading } = useIsLoadingStore();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState<{
    new: boolean;
    old: boolean;
    confirmNew: boolean;
  }>({
    old: false,
    new: false,
    confirmNew: false,
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const userDetails = {
        oldPassword: values.password,
        password: values.newPassword,
      };
      const updateUserPassword = async () => {
        try {
          setIsLoading(true);
          await updateUserDetails(userDetails);
          console.log('Password updated successfully!');
          toast.info('Password updated successfully!');
          navigate('/participant-area/#my-data');
        } catch (error: unknown) {
          console.error('Error updating user password:', error);
          toast.error('An error occurred while updating your password.');
        } finally {
          setIsLoading(false);
        }
      };
      updateUserPassword();
      formik.resetForm();
    },
  });

  return (
    <InputColContainer>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <h2 className={scss.heading}>{t.heading}</h2>
        <FormInput
          id="oldPassword"
          label={t.oldPassword}
          error={{
            condition: Boolean(
              formik.touched.password && formik.errors.password
            ),
            message: String(formik.errors.password),
          }}
        >
          <>
            <input
              type={passwordVisible.old ? 'text' : 'password'}
              name="password"
              id="oldPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <TogglePasswordVisibilityButton
              password={formik.values.password}
              isVisible={passwordVisible.old}
              toggleVisibility={() =>
                setPasswordVisible(prev => {
                  return { ...prev, old: !prev.old };
                })
              }
            />
          </>
        </FormInput>
        <FormInput
          id="newPassword"
          label={t.newPassword}
          error={{
            condition: Boolean(
              formik.touched.newPassword && formik.errors.newPassword
            ),
            message: String(formik.errors.newPassword),
          }}
        >
          <>
            <input
              type={passwordVisible.new ? 'text' : 'password'}
              name="newPassword"
              id="newPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
            <TogglePasswordVisibilityButton
              password={formik.values.newPassword}
              isVisible={passwordVisible.new}
              toggleVisibility={() =>
                setPasswordVisible(prev => {
                  return { ...prev, new: !prev.new };
                })
              }
            />
          </>
        </FormInput>
        <FormInput
          id="confirmNewPassword"
          label={t.confirmNewPassword}
          error={{
            condition: Boolean(
              formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword
            ),
            message: String(formik.errors.confirmNewPassword),
          }}
        >
          <>
            <input
              type={passwordVisible.confirmNew ? 'text' : 'password'}
              name="confirmNewPassword"
              id="confirmNewPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmNewPassword}
            />
            <TogglePasswordVisibilityButton
              password={formik.values.confirmNewPassword}
              isVisible={passwordVisible.confirmNew}
              toggleVisibility={() =>
                setPasswordVisible(prev => {
                  return { ...prev, confirmNew: !prev.confirmNew };
                })
              }
            />
          </>
        </FormInput>
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

export default NewPasswordContainer;
