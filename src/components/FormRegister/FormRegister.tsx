import scss from './FormRegister.module.scss';
import { useState, useEffect } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';
import { Regulations } from '../Regulations/Regulations';
import { IconArrowOrange } from '../../Icons/IconArrowOrange/IconArrowOrange';
import { IconStatementSquare } from '../../Icons/IconStatementSquare/IconStatementSquare';
import { IconAgree } from '../../Icons/IconAgree/IconAgree';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { UserData } from '../../Zustand/api';
import { register } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { toast } from 'react-toastify';
import AccountCta from '../AccountCta/AccountCta';
import { useNavigate } from 'react-router';
import SupportHand from '../SupportHand/SupportHand';
import { Statements } from '../Statements/Statements';

interface FormValues extends UserData {
  passwordConfirm: string;
}

export const FormRegister = () => {
  const { language } = useLanguageStore();
  const { setIsLoading } = useIsLoadingStore();
  const t = translations[language];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [consent, setConsent] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: WindowEventMap['keydown']) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIconClick = () => {
    setConsent(!consent);
  };

  const consentClass = consent
    ? `${scss.formRegister__consent} ${scss.formRegister__consentFilled}`
    : scss.formRegister__consent;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      language: language,
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      const { passwordConfirm, ...userData } = values;
      console.log(passwordConfirm);
      console.log(userData);
      const registerUser = async () => {
        try {
          setIsLoading(true);
          await register(userData);
          toast.info(
            'Registration successful! Please check your email to verify your account.'
          );
        } catch (error) {
          console.error(error);
          toast.error('An error occurred. Please try again.');
        } finally {
          setIsLoading(false);
        }
      };
      registerUser();
      formik.resetForm();
    },
  });

  if (isModalOpen) {
    return <Regulations onClose={closeModal} />;
  }

  const handleNavigate = () => {
    navigate('/login');
  };

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
          <label className={scss.formRegister__label} htmlFor="name">
            {t.name}
            <input
              id="name"
              className={`${scss.formRegister__input} ${
                formik.touched.name && formik.errors.name ? scss.error : ''
              }`}
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={scss.formikMessage}>{formik.errors.name}</div>
            ) : null}
          </label>

          <label className={scss.formRegister__label} htmlFor="surname">
            {t.lastName}
            <input
              id="surname"
              className={`${scss.formRegister__input} ${
                formik.touched.surname && formik.errors.surname
                  ? scss.error
                  : ''
              }`}
              type="text"
              name="surname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className={scss.formikMessage}>{formik.errors.surname}</div>
            ) : null}
          </label>

          <label className={scss.formRegister__label} htmlFor="email">
            {t.email}
            <input
              id="email"
              className={`${scss.formRegister__input} ${
                formik.touched.email && formik.errors.email ? scss.error : ''
              }`}
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={scss.formikMessage}>{formik.errors.email}</div>
            ) : null}
          </label>

          <label className={scss.formRegister__label} htmlFor="password">
            {t.password}
            <input
              id="password"
              className={`${scss.formRegister__input} ${
                formik.touched.password && formik.errors.password
                  ? scss.error
                  : ''
              }`}
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={scss.formikMessage}>{formik.errors.password}</div>
            ) : null}
          </label>

          <label className={scss.formRegister__label} htmlFor="passwordConfirm">
            {t.passwordConfirm}
            <input
              id="passwordConfirm"
              className={`${scss.formRegister__input} ${
                formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  ? scss.error
                  : ''
              }`}
              type="password"
              name="passwordConfirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div className={scss.formikMessage}>
                {formik.errors.passwordConfirm}
              </div>
            ) : null}
          </label>

          <Button
            type="submit"
            content={t.button}
            disabled={!formik.isValid || !formik.dirty || !consent}
          />

          <AccountCta type="login" onClick={handleNavigate} />
        </form>
        <Statements
          consent={consent}
          handleIconClick={handleIconClick}
          openModal={openModal}
        />
      </div>

      <div className={scss.formRegister__donate}>
        <div className={scss.formRegister__donateIcon}>
          <IconArrowOrange />
        </div>
        <SupportHand />
      </div>
    </div>
  );
};
