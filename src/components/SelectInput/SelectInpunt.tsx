import { FormikProps, FormikValues } from 'formik';
import scss from './SelectInput.module.scss';
import translations from './translations';
import { useLanguageStore } from '../../Zustand/useLanguageStore';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  id: string;
  name: string;
  formik: FormikProps<FormikValues>;
  shirtGender: 'Damska' | 'Męska' | 'Dziecięca';
}

const shirts = {
  Damska: [
    { value: 'rozmiar 36 (S)', label: 'rozmiar 36 (S)' },
    { value: 'rozmiar 38 (M)', label: 'rozmiar 38 (M)' },
    { value: 'rozmiar 40 (L)', label: 'rozmiar 40 (L)' },
    { value: 'rozmiar 42 (XL)', label: 'rozmiar 42 (XL)' },
  ],

  Męska: [
    { value: 'rozmiar S', label: 'rozmiar S' },
    { value: 'rozmiar M', label: 'rozmiar M' },
    { value: 'rozmiar L', label: 'rozmiar L' },
    { value: 'rozmiar XL', label: 'rozmiar XL' },
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

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  id,
  name,
  formik,
  shirtGender,
}) => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const shirtSizes = t.shirtSizes;

  const options = shirts[shirtGender].map(option => ({
    value: option.value,
    label: shirtSizes[option.label] || option.label,
  }));
  return (
    <label className={scss.SelectInput__label} htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        className={scss.SelectInput__input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {t.shirtSizes[option.label] || option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;
