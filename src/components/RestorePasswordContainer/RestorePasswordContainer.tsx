import { FormikValues, useFormik } from 'formik';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import FormInput from '../FormInput/FormInput';
import scss from './RestorePasswordContainer.module.scss';
import translations from './translations';
import { validationSchema } from './validationSchema';
import { Button } from '../Button/Button';
import InputColContainer from '../InputColContainer/InputColContainer';

function RestorePasswordContainer() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      console.log(values.email);
    },
  });
  return (
    <InputColContainer>
      <h2 className={scss.heading}>{t.heading}</h2>
      <p className={scss.sub}>{t.sub}</p>
      <form className={scss.form} onSubmit={formik.handleSubmit}>
        <FormInput
          id="email"
          label={t.email}
          error={{
            condition: Boolean(formik.touched.email && formik.errors.email),
            message: String(formik.errors.email),
          }}
        >
          <input
            name="email"
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </FormInput>
        <Button type="submit" content={t.button} />
      </form>
    </InputColContainer>
  );
}

export default RestorePasswordContainer;
