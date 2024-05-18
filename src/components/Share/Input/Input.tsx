import scss from './Input.module.scss';
import { FormikProps, FormikValues } from 'formik';

interface InputProps {
  label: string;
  id: string;
  name: string;
  formik: FormikProps<FormikValues>;
  type?: string;
}

export const Input = ({
  label,
  id,
  name,
  formik,
  type = 'text',
}: InputProps) => {
  return (
    <label className={scss.label} htmlFor={id}>
      {label}
      <input
        id={id}
        className={`${scss.input} ${
          formik.touched[name] && formik.errors[name] ? scss.error : ''
        }`}
        type={type}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className={scss.formikMessage}>{String(formik.errors[name])}</div>
      ) : null}
    </label>
  );
};
