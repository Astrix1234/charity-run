import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import ChooseAmountButton from '../ChooseAmountButton/ChooseAmountButton';
import scss from './DonationBox.module.scss';
import translations from './translations';
import SupportButton from '../../Share/SupportButton/SupportButton';
import DonationAmountInput from '../DonationAmountInput/DonationAmountInput';
import { validationSchema } from './validationSchema';
import { useFormik } from 'formik';
import DonationEmail from '../DonationEmail/DonationEmail';
import { registerForDonation } from '../../../Zustand/api';
import { useIsLoadingStore } from '../../../Zustand/useIsLoadingStore';

function DonationBox() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLoading } = useIsLoadingStore();

  const amounts = [25, 50, 100];

  const formik = useFormik({
    initialValues: { amount: 0, email: '' },
    validationSchema: validationSchema,
    onSubmit: values => {
      const { amount, email } = values;
      const amountInCents = amount * 100;
      const givDonation = async () => {
        try {
          setIsLoading(true);
          const response = await registerForDonation(amountInCents, email);
          if (response.status === 201 && response.data) {
            window.location.href = response.data.data;
            console.log('Donation successful!');
          } else {
            console.error('Unexpected response status:', response.status);
          }
        } catch (error: unknown) {
          console.error('Error:', error);
        } finally {
          setIsLoading(false);
        }
      };
      givDonation();
      formik.resetForm();
    },
  });

  const supportButtonDisabled = Boolean(
    formik.errors.amount || formik.errors.email || !formik.values.amount
  );

  return (
    <div className={scss.container}>
      <h4 className={scss.heading}>{t.support}</h4>
      <p className={scss.join}>{t.join}</p>
      <p className={scss.choose}>{t.choose}</p>
      <form onSubmit={formik.handleSubmit} className={scss.form}>
        <div className={scss.row}>
          {amounts.map((item, i) => (
            <ChooseAmountButton
              id={`amount-box-${i}`}
              amount={item}
              value={formik.values.amount}
              key={i}
            >
              <input
                type="radio"
                id={`amount-box-${i}`}
                value={item}
                name="amount-box"
                onChange={() => formik.setFieldValue('amount', item)}
                checked={formik.values.amount === item}
                onBlur={formik.handleBlur}
              />
            </ChooseAmountButton>
          ))}
          <DonationAmountInput
            isActive={
              !amounts.includes(formik.values.amount) && !formik.errors.amount
            }
            value={formik.values.amount}
            error={{
              condition: Boolean(formik.touched.amount && formik.errors.amount),
              message: String(formik.errors.amount),
            }}
          >
            <>
              <input
                id="amount"
                name="amount"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
              />
            </>
          </DonationAmountInput>
        </div>
        <DonationEmail
          id="email"
          label={t.email}
          error={{
            condition: Boolean(formik.touched.email && formik.errors.email),
            message: String(formik.errors.email),
          }}
        >
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </DonationEmail>
        <SupportButton disabled={supportButtonDisabled} type="submit" />
      </form>
    </div>
  );
}

export default DonationBox;
