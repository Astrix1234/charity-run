import { FormikProps, FormikValues } from 'formik';
import scss from './SelectInput.module.scss';
import { useState, useEffect } from 'react';

interface SelectInputProps {
  label: string;
  id: string;
  name: string;
  formik: FormikProps<FormikValues>;
  options: { value: string; label: string }[];
  shirtType?: 'Damska' | 'Męska' | 'Dziecięca';
}

const sizes = {
  Damska: [
    { value: 'rozmiar 36 (S)', label: 'rozmiar 36 (S)' },
    { value: 'rozmiar 38 (M)', label: 'rozmiar 38 (M)' },
    { value: 'rozmiar 40 (L)', label: 'rozmiar 40 (L)' },
    { value: 'rozmiar 42 (XL)', label: 'rozmiar 42 (XL)' },
  ],

  Męska: [
    { value: 'rozmiar S', label: 'Small' },
    { value: 'rozmiar M', label: 'Medium' },
    { value: 'rozmiar L', label: 'Large' },
    { value: 'rozmiar XL', label: 'XLarge' },
  ],

  Dziecięca: [
    { value: '104', label: '104' },
    { value: '110', label: '110' },
    { value: '116', label: '116' },
    { value: '122', label: '122' },
    { value: '134', label: '134' },
    { value: '140', label: '140' },
  ],
};

export const SelectInput = ({
  label,
  id,
  name,
  formik,
  shirtType,
}: SelectInputProps) => {
  const [currentOptions, setCurrentOptions] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    const newOptions = shirtType ? sizes[shirtType as keyof typeof sizes] : [];
    setCurrentOptions(newOptions);
  }, [shirtType]);

  return (
    <label className={scss.SelectInput__label} htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        className={`${scss.SelectInput__input} ${
          formik.touched[name] && formik.errors[name] ? scss.error : ''
        }`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {currentOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div className={scss.SelectInput__errorMsg}>
          {String(formik.errors[name])}
        </div>
      )}
    </label>
  );
};

export default SelectInput;
