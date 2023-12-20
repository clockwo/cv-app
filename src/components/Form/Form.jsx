import { useState } from 'react';
import './Form.scss';
import GeneralSection from './sections/GeneralSection';
import EducationSection from './sections/EducationSection';
import EmploymentSection from './sections/EmploymentSection';
import FormHeader from './FormHeader';

const Form = () => {
  const [form, setForm] = useState([
    {
      id: 'General',
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    {
      id: 'Education',
      degree: '',
      school: '',
      city: '',
      country: '',
    },
    {
      id: 'Practical',
      company: '',
      position: '',
      responsibilities: '',
      employmentPeriod: '',
    },
  ]);

  const [step, setStep] = useState(0);

  const sectionConfigs = [
    { id: 'General', Component: GeneralSection },
    { id: 'Education', Component: EducationSection },
    { id: 'Employment', Component: EmploymentSection },
  ];

  const handleInputChange = (index, field, value) => {
    setForm((form) => ({
      ...form,
      [index]: {
        ...form[index],
        [field]: value,
      },
    }));
  };

  const moveBack = () => {
    if (step === 0) return;
    setStep((step) => step - 1);
  };

  const moveForward = () => {
    if (step === 2) return;
    setStep((step) => step + 1);
  };

  const currentSection = sectionConfigs[step];

  return (
    <form className="form">
      <FormHeader
        step={step}
        form={form}
        moveBack={moveBack}
        moveForward={moveForward}
      />

      {currentSection && (
        <currentSection.Component
          form={form}
          step={step}
          handleInputChange={handleInputChange}
        />
      )}
    </form>
  );
};

export default Form;

// [ ] Сделать LocalStorage ( https://youtu.be/GihQAC1I39Q?si=Py07E0sF4rkTXsCY )
// [ ] Сделать так, чтобы учеба и опыт работы были массивами
// [ ] Сделать рендер для резюме
