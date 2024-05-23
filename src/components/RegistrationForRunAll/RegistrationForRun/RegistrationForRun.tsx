import scss from './RegistrationForRun.module.scss';
import { TogetherToTheGoal } from '../../Share/TogetherToTheGoal/TogetherToTheGoal';
import { Button } from '../../Share/Button/Button';
import { useState, useEffect } from 'react';
import translations from './translations';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import { Race, Age, raceParticipantUserData, userParticipation } from '../../../Zustand/api';
import { useUserDataStore } from '../../../Zustand/useUserDataStore';
import { Statements } from '../../LegalAll/Statements/Statements';
import { useIsLoadingStore } from '../../../Zustand/useIsLoadingStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Ages: Age[] = ['Pełnoletni', 'Niepełnoletni'];
const Races : Race[]  = ['Kapcie','MatkaIDziecko','Bieg1KM','Bieg5KM','Spacer'];



const setAgeValue = (value: string): Age | undefined => {
  const allowedValues: Age[] = ['Pełnoletni', 'Niepełnoletni'];
  return allowedValues.find(type => type === value);
};

export const RegisterForRun = () => {
  const navigate = useNavigate();
  const { language } = useLanguageStore();
  const { setIsLoading } = useIsLoadingStore();
  const t = translations[language];
  const { userData } = useUserDataStore();

  const ageMap = t.AgeMap;
  const raceMap = t.RaceMap;

  const [consent, setConsent] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [isDiscountCodeValid, setIsDiscountCodeValid] = useState(false);
  const [discountMessage, setDiscountMessage] = useState('');

  const MINIMUM_CHARGE_AMOUNT = 1;

  const handleIconClick = () => {
    setConsent(!consent);
  };

  const handleDiscountCode = () => {
    if (discountCode === 'Podarujinnymmoc-Hematobieg') {
      setIsDiscountCodeValid(true);
      setDiscountMessage('');
    } else {
      setIsDiscountCodeValid(false);
      setDiscountMessage(t.wrongCode);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      adult: 'Pełnoletni',
      team: '',
      language: language,
      km: '0',
      agreementStatements: consent,
      raceID: [],
      userId: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: raceParticipantUserData) => {
      const registerUserOnRun = async () => {
        const amount = isDiscountCodeValid
          ? MINIMUM_CHARGE_AMOUNT
          : values.adult === 'Niepełnoletni'
          ? 2000
          : 3000;
        try {
          setIsLoading(true);
          const response = await userParticipation(amount, values);
          if (response.status === 201 && response.data) {
            if (isDiscountCodeValid) {
              toast.info('Registration successful!');
              navigate('/');
              return;
            } else {
              window.location.href = response.data.data;
              console.log('Registration successful!');
            }
          } else {
            console.error('Unexpected response status:', response.status);
          }
        } catch (error: unknown) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      registerUserOnRun();
      formik.resetForm();
      setConsent(false);
      setIsDiscountCodeValid(false);
      setDiscountMessage('');
    },
  });

  useEffect(() => {
    formik.setFieldValue('agreementStatements', consent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consent]);

  useEffect(() => {
    if (userData?.email) {
      formik.setFieldValue('email', userData.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData?.email]);

  useEffect(() => {
    if (userData?.id) {
      formik.setFieldValue('userId', userData.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData?.id]);

  const totalAmount = () => {
    if (isDiscountCodeValid) {
      return '0,00 PLN';
    }
    return formik.values.adult === 'Niepełnoletni'
      ? '20,00 PLN'
      : '30,00 PLN';
  };


  return (
    <section className={scss.registration}>
      <div className={scss.registration__background}>
        <div className={scss.registration__containerMain}>
          <TogetherToTheGoal />
          <div className={scss.registration__container}>
            <div className={scss.registration__windows}>
              <div className={scss.registration__titleContainer}>
                <p className={scss.registration__sectionTitle}>{t.button}</p>
              </div>
              <form
                className={scss.form}
                onSubmit={formik.handleSubmit}
              >
                <div  className={scss.registration__form}
                >
                <label className={scss.registration__label} htmlFor="name">
                  {t.name}
                  <input
                    id="name"
                    className={`${scss.registration__input} ${
                      formik.touched.name && formik.errors.name
                        ? scss.error
                        : ''
                    }`}
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className={scss.formikMessage}>
                      {formik.errors.name}
                    </div>
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

                <label className={scss.registration__label} htmlFor="email">
                  {t.email}
                  <input
                    id="email"
                    className={`${scss.registration__input} ${
                      formik.touched.email && formik.errors.email
                        ? scss.error
                        : ''
                    }`}
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className={scss.formikMessage}>
                      {formik.errors.email}
                    </div>
                  ) : null}
                </label>

                <label className={scss.registration__label} htmlFor="team">
                  {t.team}
                  <input
                    id="team"
                    className={`${scss.registration__input} ${
                      formik.touched.team && formik.errors.team
                        ? scss.error
                        : ''
                    }`}
                    type="text"
                    name="team"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.team}
                  />
                  {formik.touched.team && formik.errors.team ? (
                    <div className={scss.formikMessage}>
                      {formik.errors.team}
                    </div>
                  ) : null}
                </label>


                <div className={scss.registration__radioList}>
                  <h3 className={scss.registration__label}>Jesteś osobą:</h3>
                  {Ages.map(age => (
                    <label key={age}>
                      <input
                        type="radio"
                        name="adult"
                        value={age}
                        checked={formik.values.adult === age}
                        onChange={e => {
                          const newValue = setAgeValue(e.target.value);
                          if (newValue) {
                            formik.setFieldValue('adult', newValue);
                          } else {
                            console.warn('Invalid value for adult');
                          }
                        }}
                      />
                      {ageMap[age]}
                    </label>
                  ))}
                </div>
                <div className={scss.registration__checkboxList}>
                  <h3 className={scss.registration__label}> Wybierz bieg (możesz wybrać wiele)</h3>
                  {formik.errors.raceID && (
                    <>
                      <div className={scss.formikMessage2}>
                        {formik.errors.raceID}
                      </div>
                    </>
                  )}
                  {Races.map(race => (
                    <label key={race}>
                      <input
                        type="checkbox"
                        name="raceID"
                        value={race}
                        onChange={formik.handleChange}
                      />
                      {raceMap[race]}
                    </label>
                  ))}
                </div>
                </div>
                <div  className={scss.registration__form}>
                  <div className={scss.registration__summery}>
                    <label
                      className={scss.registration__label}
                      htmlFor="discount"
                    >
                      {t.discount}
                      <input
                        id="discount"
                        className={scss.registration__input}
                        type="text"
                        name="discount"
                        onChange={e => setDiscountCode(e.target.value)}
                        onBlur={handleDiscountCode}
                      />
                      {discountMessage && (
                        <div className={scss.formikMessage}>
                          {discountMessage}
                        </div>
                      )}
                    </label>

                    <button
                      className={scss.registration__buttonDiscount}
                      type="button"
                      onClick={handleDiscountCode}
                    >
                      {t.payDiscount}
                    </button>

                    <div className={scss.registration__summeryToPay}>
                      <p className={scss.registration__summeryToPayText}>
                        {t.toPay}
                      </p>
                      <p className={scss.registration__summeryToPayCount}>
                        {totalAmount()}
                      </p>
                    </div>
                  </div>
                  <div className={scss.buttonContainer}>
                    {!isDiscountCodeValid && <p>{t.statementPayment}</p>}
                    <Button
                      type="submit"
                      content={t.button}
                      disabled={!formik.isValid || !formik.dirty || !consent}
                    />
                    {formik.touched.agreementStatements &&
                    formik.errors.agreementStatements ? (
                      <div className={scss.formikMessageStatement}>
                        {formik.errors.agreementStatements}
                      </div>
                    ) : null}
                  </div>
                <Statements consent={consent} handleIconClick={handleIconClick} />
                <div className={scss.registration__instructions}>
                  <p className={scss.registration__instructionsText}>
                    {t.instructionsCost}
                  </p>
                  <p className={scss.registration__instructionsText}>
                    <span
                      className={scss.registration__instructionsTextHighlighted}
                    >
                      {t.cost1}
                    </span>
                    {t.costAdult}
                  </p>
                  <p className={scss.registration__instructionsText}>
                    <span
                      className={scss.registration__instructionsTextHighlighted}
                    >
                      {t.cost2}
                    </span>
                    {t.costChild}
                  </p>
                  <p className={scss.registration__instructionsText}>
                    {t.costGeneral}
                  </p>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForRun;
