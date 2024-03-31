import { SelectInput } from '../SelectInput/SelectInpunt';
import { FormikProps, FormikValues } from 'formik';
import scss from './RegistrationForRun.module.scss';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { Regulations } from '../Regulations/Regulations';
import { IconStatementSquare } from '../../Icons/IconStatementSquare/IconStatementSquare';
import { IconAgree } from '../../Icons/IconAgree/IconAgree';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { raceParticipantUserData } from '../../Zustand/api';

type ShirtGender = 'Damska' | 'Męska' | 'Dziecięca';

interface FormValues extends raceParticipantUserData {
  shirtGender: ShirtGender;
  paymentMethod: string;
}

export const shirtGenders: ShirtGender[] = ['Damska', 'Męska', 'Dziecięca'];

const setShirtGenderValue = (value: string): ShirtGender | undefined => {
  const allowedValues: ShirtGender[] = ['Damska', 'Męska', 'Dziecięca'];
  return allowedValues.find(type => type === value);
};

const paymentMethodKeys = [
  'paymentMethodCard',
  'paymentMethodTransfer',
  'paymentMethodBLIK',
  'paymentMethodGooglePay',
];

export const RegisterForRun = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const genderMap = t.shirtGenderMap;

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

  const handleIconClick = () => {
    setConsent(!consent);
  };

  const consentClass = consent
    ? `${scss.registration__consent} ${scss.registration__consentFilled}`
    : scss.registration__consent;

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      language: language,
      shirt: '',
      shirtGender: 'Damska',
      paymentMethod: 'BLIK',
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      const { ...raceParticipantUserData } = values;
      console.log(raceParticipantUserData);
      formik.resetForm();
    },
  });
  if (isModalOpen) {
    return <Regulations onClose={closeModal} />;
  }

  return (
    <section className={scss.registration}>
      <div className={scss.registration__background}>
        <TogetherToTheGoal />
        <div className={scss.registration__container}>
          <div className={scss.registration__windows}>
            <form
              className={scss.registration__form}
              onSubmit={formik.handleSubmit}
            >
              <div className={scss.registration__titleContainer}>
                <p className={scss.registration__sectionTitle}>{t.button}</p>
              </div>
              <label className={scss.registration__label} htmlFor="name">
                {t.name}
                <input
                  id="name"
                  className={`${scss.registration__input} ${
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

              <label className={scss.registration__label} htmlFor="surname">
                {t.lastName}
                <input
                  id="surname"
                  className={`${scss.registration__input} ${
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
                  <div className={scss.formikMessage}>
                    {formik.errors.surname}
                  </div>
                ) : null}
              </label>

              <label className={scss.registration__label} htmlFor="phone">
                {t.number}
                <input
                  id="phone"
                  className={`${scss.registration__input} ${
                    formik.touched.phone && formik.errors.phone
                      ? scss.error
                      : ''
                  }`}
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={scss.formikMessage}>
                    {formik.errors.phone}
                  </div>
                ) : null}
              </label>
              <div className={scss.registration__sizeList}>
                <SelectInput
                  label={t.shirt}
                  id="shirt"
                  name="shirt"
                  formik={formik as unknown as FormikProps<FormikValues>}
                  shirtGender={formik.values.shirtGender}
                />
              </div>
              <div className={scss.registration__radioList}>
                {shirtGenders.map(gender => (
                  <label key={gender}>
                    <input
                      type="radio"
                      name="shirtGender"
                      value={gender}
                      checked={formik.values.shirtGender === gender}
                      onChange={e => {
                        const newValue = setShirtGenderValue(e.target.value);
                        if (newValue) {
                          formik.setFieldValue('shirtGender', newValue);
                        } else {
                          console.warn('Invalid value for shirtGender');
                        }
                      }}
                    />
                    {genderMap[gender]}
                  </label>
                ))}{' '}
              </div>
              <label
                htmlFor="paymentMethod"
                className={scss.registration__label}
              >
                {t.paymentMethod}
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className={`${scss.registration__input} ${
                    formik.touched.paymentMethod && formik.errors.paymentMethod
                      ? scss.error
                      : ''
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.paymentMethod}
                >
                  {paymentMethodKeys.map(key => (
                    <option key={key} value={t[key] as string}>
                      {t[key] as string}
                    </option>
                  ))}
                </select>
                {formik.touched.paymentMethod &&
                  formik.errors.paymentMethod && (
                    <div className={scss.registration__errorMsg}>
                      {formik.errors.paymentMethod}
                    </div>
                  )}
              </label>

              <Button
                type="submit"
                content="Zapisz się na bieg"
                disabled={!formik.isValid || !formik.dirty}
              />
            </form>
            <div className={scss.registration__regulations}>
              <p className={scss.registration__sectionTitle}>{t.statement}</p>
              <h3 className={scss.registration__regulationsTitle}>
                <span className={consentClass} onClick={handleIconClick}>
                  <IconStatementSquare />
                  {consent && (
                    <span className={scss.registration__iconAgree}>
                      {' '}
                      <IconAgree />
                    </span>
                  )}
                </span>
                {t.statementTitle}
              </h3>
              <p>{t.statementIDo}</p>
              <ol className={scss.registration__statementList}>
                {' '}
                <li className={scss.registration__statementItem}>
                  {t.statementItem1part1}
                  <span
                    onClick={openModal}
                    className={scss.registration__highlights}
                  >
                    {t.span1}
                  </span>
                  {t.statementItem1part2}
                  <span
                    onClick={openModal}
                    className={scss.registration__highlights}
                  >
                    {t.span2}
                  </span>
                  {t.statementItem1part3}
                </li>
                <li className={scss.registration__statementItem}>
                  {t.statementItem2}
                </li>
                <li className={scss.registration__statementItem}>
                  {t.statementItem3}
                </li>
                <li className={scss.registration__statementItem}>
                  {t.statementItem4}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForRun;
