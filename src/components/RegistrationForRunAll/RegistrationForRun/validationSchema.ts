import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(30, 'Maximum 30 characters')
    .required('Required field'),
  surname: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 30 characters')
    .required('Required field'),
  phone: Yup.string()
    .matches(
      /^\+?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3}) ?(\d{1,3})$/,
      'Invalid phone number'
    )
    .required('Required field'),
  email:Yup.string().email(),
  raceID: Yup.array()
    .test(
      'exclusive-runs',
      'You can select either "Bieg1KM" or "Bieg5KM", but not both.',
      values => {
        const hasBieg1KM = values?.includes("Bieg1KM");
        const hasBieg5KM = values?.includes("Bieg5KM");
        return !(hasBieg1KM && hasBieg5KM);
      }
    ),
  agreementStatements: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions.')
    .required('You must accept the terms and conditions.'),
});
