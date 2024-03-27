import scss from './FormRegister.module.scss';
// import React, { useState } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Button } from '../Button/Button';

// import { useFormik } from 'formik';

export const FormRegister = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };

  //   const formik = useFormik({
  //     initialValues: {
  //       name: '',
  //       email: '',
  //       password: '',
  //       passwordConfirm: '',
  //     },
  //   });

  return (
    <div className={scss.formRegister__container}>
      <form className={scss.formRegister__form}>
        <p>{t.register}</p>
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
            <option value="" disabled hidden></option>
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
          Masz już konto?{' '}
          <span className={scss.formRegister__link}>Zaloguj się</span>
        </p>
      </form>
      <div className={scss.formRegister__regulations}> </div>
    </div>
  );
};
