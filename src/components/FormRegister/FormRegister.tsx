import scss from './FormRegister.module.scss';
import { useState, useEffect } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';
import { Regulations } from '../Regulations/Regulations';
import { ButtonOrange } from '../ButtonOrange/ButtonOrange';
import { IconArrowOrange } from '../../Icons/IconArrowOrange/IconArrowOrange';
import { IconHandHeart } from '../../Icons/IconHandHeart/IconHandHeart';
import { IconStatementSquare } from '../../Icons/IconStatementSquare/IconStatementSquare';
import { IconAgree } from '../../Icons/IconAgree/IconAgree';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { UserData } from '../../Zustand/api';

interface FormValues extends UserData {
  passwordConfirm: string;
}

export const FormRegister = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [consent, setConsent] = useState(false);

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

  const handleClick = () => {
    console.log('Button clicked');
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
      phone: '',
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
    },
  });

  if (isModalOpen) {
    return <Regulations onClose={closeModal} />;
  }

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

          <label className={scss.formRegister__label} htmlFor="phone">
            {t.number}
            <input
              id="phone"
              className={`${scss.formRegister__input} ${
                formik.touched.phone && formik.errors.phone ? scss.error : ''
              }`}
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={scss.formikMessage}>{formik.errors.phone}</div>
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
              type="text"
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
              type="text"
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

          <Button onClick={handleClick} content={t.button} />
          <p className={scss.formRegister__login}>
            {t.account}
            <span className={scss.formRegister__link}>{t.login}</span>
          </p>
        </form>
        <div className={scss.formRegister__regulations}>
          <p className={scss.formRegister__sectionTitle}>{t.statement}</p>
          <h3 className={scss.formRegister__regulationsTitle}>
            <span className={consentClass} onClick={handleIconClick}>
              <IconStatementSquare />
              {consent && (
                <span className={scss.formRegister__iconAgree}>
                  {' '}
                  <IconAgree />
                </span>
              )}
            </span>
            {t.statementTitle}
          </h3>
          <p>{t.statementIDo}</p>
          <ol className={scss.formRegister__statementList}>
            {' '}
            <li className={scss.formRegister__statementItem}>
              {t.statementItem1part1}
              <span
                onClick={openModal}
                className={scss.formRegister__highlights}
              >
                {t.span1}
              </span>
              {t.statementItem1part2}
              <span
                onClick={openModal}
                className={scss.formRegister__highlights}
              >
                {t.span2}
              </span>
              {t.statementItem1part3}
            </li>
            <li className={scss.formRegister__statementItem}>
              {t.statementItem2}
            </li>
            <li className={scss.formRegister__statementItem}>
              {t.statementItem3}
            </li>
            <li className={scss.formRegister__statementItem}>
              {t.statementItem4}
            </li>
          </ol>
        </div>
      </div>
      <div className={scss.formRegister__donate}>
        <div className={scss.formRegister__donateIllustration} />
        <div className={scss.formRegister__donateIcon}>
          <IconArrowOrange />
        </div>
        <ButtonOrange
          onClick={handleClick}
          icon={<IconHandHeart />}
          content={t.donation}
        />
      </div>
    </div>
  );
};
