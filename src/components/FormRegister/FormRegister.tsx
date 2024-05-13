import scss from './FormRegister.module.scss';
import { useState, useEffect } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { UserData } from '../../Zustand/api';
import { register } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { toast } from 'react-toastify';
import AccountCta from '../AccountCta/AccountCta';
import { Statements } from '../Statements/Statements';
import FormInput from '../FormInput/FormInput';
import TogglePasswordVisibilityButton from '../TogglePasswordVisibilityButton/TogglePasswordVisibilityButton';
import { useMediaQuery } from '@react-hook/media-query';

interface FormValues extends UserData {
  passwordConfirm: string;
  agreementStatements: boolean;
}

export const FormRegister = () => {
  const { language } = useLanguageStore();
  const { setIsLoading } = useIsLoadingStore();
  const t = translations[language];

  const [consent, setConsent] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const isWideScreen = useMediaQuery('(min-width: 1360px)');

  const handleIconClick = () => {
    setConsent(!consent);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      language: language,
      agreementStatements: consent,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      const userData = {
        name: values.name,
        surname: values.surname,
        email: values.email,
        password: values.password,
        language: values.language,
        agreementStatements: values.agreementStatements,
      };
      const registerUser = async () => {
        try {
          setIsLoading(true);
          const response = await register(userData);
          if (response && response.status === 409) {
            toast.error('Email already in use. Please use a different email.');
          } else if (response && response.status === 201) {
            toast.info(
              'Registration successful! Please check your email to verify your account.'
            );
          } else {
            toast.error('An error occurred. Please try again.');
          }
        } catch (error) {
          console.error(error);
          toast.error('An error occurred. Please try again.');
        } finally {
          setIsLoading(false);
        }
      };
      registerUser();
      formik.resetForm();
      setConsent(false);
    },
  });

  useEffect(() => {
    formik.setFieldValue('agreementStatements', consent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consent]);

  return (
    <div className={scss.formRegister__container}>
      <div className={scss.formRegister__windows}>
        <form
          className={scss.formRegister__form}
          onSubmit={formik.handleSubmit}
        >
          <div className={scss.formRegister__titleContainer}>
            <p className={scss.formRegister__sectionTitle}>{t.register}</p>
          </div>
          <FormInput
            error={{
              condition: Boolean(formik.touched.name && formik.errors.name),
              message: String(formik.errors.name),
            }}
            label={t.name}
            id="name"
          >
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </FormInput>

          <FormInput
            error={{
              condition: Boolean(
                formik.touched.surname && formik.errors.surname
              ),
              message: String(formik.errors.surname),
            }}
            label={t.lastName}
            id="surname"
          >
            <input
              type="text"
              name="surname"
              id="surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
          </FormInput>

          <FormInput
            error={{
              condition: Boolean(formik.touched.email && formik.errors.email),
              message: String(formik.errors.email),
            }}
            label={t.email}
            id="email"
          >
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </FormInput>

          <FormInput
            error={{
              condition: Boolean(
                formik.touched.password && formik.errors.password
              ),
              message: String(formik.errors.password),
            }}
            label={t.password}
            id="password"
          >
            <>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <TogglePasswordVisibilityButton
                isVisible={passwordVisible}
                toggleVisibility={() => setPasswordVisible(prev => !prev)}
                password={formik.values.password}
              />
            </>
          </FormInput>

          <FormInput
            error={{
              condition: Boolean(
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
              ),
              message: String(formik.errors.passwordConfirm),
            }}
            label={t.passwordConfirm}
            id="passwordConfirm"
          >
            <>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="passwordConfirm"
                id="passwordConfirm"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirm}
              />
              <TogglePasswordVisibilityButton
                isVisible={confirmPasswordVisible}
                toggleVisibility={() =>
                  setConfirmPasswordVisible(prev => !prev)
                }
                password={formik.values.passwordConfirm}
              />
            </>
          </FormInput>

          {!isWideScreen && (
            <Statements consent={consent} handleIconClick={handleIconClick} />
          )}
          <div className={scss.formRegister__buttonContainer}>
            <Button
              type="submit"
              content={t.button}
              disabled={!formik.isValid || !formik.dirty || !consent}
            />

            <AccountCta type="login" />
            {formik.touched.agreementStatements &&
            formik.errors.agreementStatements ? (
              <div className={scss.formikMessageStatement}>
                {formik.errors.agreementStatements}
              </div>
            ) : null}
          </div>
        </form>

        {isWideScreen && (
          <Statements consent={consent} handleIconClick={handleIconClick} />
        )}
      </div>

      <div className={scss.formRegister__instructions}>
        <h4 className={scss.formRegister__instructionsTitle}>
          {t.instructionsTitle}
        </h4>
        <p className={scss.formRegister__instructionsText}>
          {t.instructionsCost}
        </p>
        <p className={scss.formRegister__instructionsText}>
          <span className={scss.formRegister__instructionsTextHighlighted}>
            {t.cost1}
          </span>
          {t.costAdult}
        </p>
        <p className={scss.formRegister__instructionsText}>
          <span className={scss.formRegister__instructionsTextHighlighted}>
            {t.cost2}
          </span>
          {t.costChild}
        </p>
        <p className={scss.formRegister__instructionsText}>{t.costGeneral}</p>
      </div>
    </div>
  );
};
