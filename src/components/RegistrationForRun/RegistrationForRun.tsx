import { Input } from '../Input/Input';
import { SelectInput } from '../SelectInput/SelectInpunt';
import { Formik, Form } from 'formik';
import { FormikProps, FormikValues } from 'formik';
import scss from './RegistrationForRun.module.scss';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { Button } from '../Button/Button';
type ShirtType = 'Damska' | 'Męska' | 'Dziecięca';

interface FormValues {
  firstName: string;
  lastName: string;
  shirtSize: string;
  shirtType?: ShirtType;
}

export const shirtTypes: ShirtType[] = ['Damska', 'Męska', 'Dziecięca'];

const setShirtTypeValue = (value: string): ShirtType | undefined => {
  const allowedValues: ShirtType[] = ['Damska', 'Męska', 'Dziecięca'];
  return allowedValues.find(type => type === value);
};

export const RegistrationForRun = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <section className={scss.registration}>
      <div className={scss.registration__background}>
        <div className={scss.registration__container}>
          <TogetherToTheGoal />
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              shirtSize: '',
              shirtType: 'Damska',
            }}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <div className={scss.registration__title}>
                  Zapisz się na bieg
                </div>
                <Input
                  label="Imię"
                  id="firstName"
                  name="firstName"
                  formik={formik as unknown as FormikProps<FormikValues>}
                />
                <Input
                  label="Nazwisko"
                  id="lastName"
                  name="lastName"
                  formik={formik as unknown as FormikProps<FormikValues>}
                />
                <div>
                  {shirtTypes.map(type => (
                    <label key={type}>
                      <input
                        type="radio"
                        name="shirtType"
                        value={type}
                        checked={formik.values.shirtType === type}
                        onChange={e => {
                          const newValue = setShirtTypeValue(e.target.value);
                          if (newValue) {
                            formik.setFieldValue('shirtType', newValue);
                          } else {
                            console.warn('Nieprawidłowa wartość dla shirtType');
                          }
                        }}
                      />
                      {type}
                    </label>
                  ))}
                </div>
                <div className={scss.registration__radioList}>
                  <SelectInput
                    label="Rozmiar koszulki"
                    id="shirtSize"
                    name="shirtSize"
                    formik={formik as unknown as FormikProps<FormikValues>} // Bez asercji typu; upewnij się, że SelectInputProps jest kompatybilny
                    options={[]}
                    shirtType={formik.values.shirtType}
                  />
                </div>
                <Button
                  content="Zarejestruj się"
                  onClick={() => formik.handleSubmit()}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForRun;
