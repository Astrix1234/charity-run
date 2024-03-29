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

// import { useFormik } from 'formik';

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
    ? `&{scss.formRegister__consent} ${scss.formRegister__consentFilled}`
    : scss.formRegister__consent;

  //   const formik = useFormik({
  //     initialValues: {
  //       name: '',
  //       email: '',
  //       password: '',
  //       passwordConfirm: '',
  //     },
  //   });

  if (isModalOpen) {
    return <Regulations onClose={closeModal} />;
  }

  return (
    <div className={scss.formRegister__container}>
      <div className={scss.formRegister__windows}>
        <form className={scss.formRegister__form}>
          <div className={scss.formRegister__titleContainer}>
            <p className={scss.formRegister__sectionTitle}>{t.register}</p>
          </div>
          <label htmlFor="name" className={scss.formRegister__label}>
            {t.name}
            <input
              id="name"
              className={scss.formRegister__input}
              type="text"
              name="name"
              // onChange={Formik.handleChange}
              // value={formik.values.name}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="lastName" className={scss.formRegister__label}>
            {t.lastName}
            <input
              id="lastName"
              className={scss.formRegister__input}
              type="text"
              name="lastName"
              // onChange={Formik.handleChange}
              // value={formik.values.lastName}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="number" className={scss.formRegister__label}>
            {t.number}
            <input
              id="number"
              className={scss.formRegister__input}
              type="text"
              name="number"
              // onChange={Formik.handleChange}
              // value={formik.values.number}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="email" className={scss.formRegister__label}>
            {t.email}
            <input
              id="email"
              className={scss.formRegister__input}
              type="email"
              name="email"
              // onChange={Formik.handleChange}
              // value={formik.values.email}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="password" className={scss.formRegister__label}>
            {t.password}
            <input
              id="password"
              className={scss.formRegister__input}
              type="password"
              name="password"
              // onChange={Formik.handleChange}
              // value={formik.values.password}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="passwordConfirm" className={scss.formRegister__label}>
            {t.passwordConfirm}
            <input
              id="passwordConfirm"
              className={scss.formRegister__input}
              type="password"
              name="passwordConfirm"
              // onChange={Formik.handleChange}
              // value={formik.values.passwordConfirm}
              // onBlur={formik.handleBlur}
            />
          </label>

          <label htmlFor="tshirt" className={scss.formRegister__label}>
            {t.tshirt}
            <select
              id="tshirt"
              className={scss.formRegister__select}
              name="tshirt"
              // onChange={Formik.handleChange}
              // value={formik.values.tshirt}
              // onBlur={formik.handleBlur}
            >
              {/* <option value="" hidden disabled defaultValue></option> */}
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </label>

          <div className={scss.formRegister__radioList}>
            <div>
              <input
                id="tshirtTypeFemale"
                className={scss.formRegister__radio}
                type="radio"
                name="tshirtType"
                value={t.tshirtTypeFemale}
                // onChange={Formik.handleChange}
                // checked={formik.values.tshirtType === t.tshirtTypeFemale}
                // onBlur={formik.handleBlur}
              />
              <label htmlFor="tshirtTypeFemale">{t.tshirtTypeFemale}</label>
            </div>
            <div>
              <input
                id="tshirtTypeMale"
                className={scss.formRegister__radio}
                type="radio"
                name="tshirtType"
                value={t.tshirtTypeMale}
                // onChange={Formik.handleChange}
                // checked={formik.values.tshirtType === t.tshirtTypeMale}
                // onBlur={formik.handleBlur}
              />
              <label htmlFor="tshirtTypeMale">{t.tshirtTypeMale}</label>
            </div>
            <div>
              <input
                id="tshirtTypeChild"
                className={scss.formRegister__radio}
                type="radio"
                name="tshirtType"
                value={t.tshirtTypeChild}
                // onChange={Formik.handleChange}
                // checked={formik.values.tshirtType === t.tshirtTypeChild}
                // onBlur={formik.handleBlur}
              />
              <label htmlFor="tshirtTypeChild">{t.tshirtTypeChild}</label>
            </div>
          </div>
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
