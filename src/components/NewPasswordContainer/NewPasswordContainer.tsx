import { useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import InputColContainer from '../InputColContainer/InputColContainer';
import scss from './NewPasswordContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import FormInput from '../FormInput/FormInput';
import { useState } from 'react';
import TogglePasswordVisibilityButton from '../TogglePasswordVisibilityButton/TogglePasswordVisibilityButton';
import { Button } from '../Button/Button';
import AccountCta from '../AccountCta/AccountCta';
import { toast } from 'react-toastify';

function NewPasswordContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];
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
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      formik.resetForm();
      toast.success(t.toast);
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
              formik.touched.oldPassword && formik.errors.oldPassword
            ),
            message: String(formik.errors.oldPassword),
          }}
        >
          <>
            <input
              type={passwordVisible.old ? 'text' : 'password'}
              name="oldPassword"
              id="oldPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
            />
            <TogglePasswordVisibilityButton
              password={formik.values.oldPassword}
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
        <Button type="submit" content={t.button} />
      </form>
      <AccountCta type="register" />
    </InputColContainer>
  );
}

export default NewPasswordContainer;
