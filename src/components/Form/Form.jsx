import './Form.scss';
import { useEffect, useState } from 'react';
import GeneralSection from './sections/GeneralSection';
import EducationSection from './sections/EducationSection';
import EmploymentSection from './sections/EmploymentSection';
import FormHeader from './FormHeader';

const Form = ({
  general,
  handleGeneralChanges,
  education,
  handleEducationChanges,
  removeEducationItem,
  experience,
  handleExperienceChanges,
  removeExperienceItem,
  addNewItem,
}) => {
  const [step, setStep] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const stepComponents = {
    0: {
      title: 'General',
      component: (
        <GeneralSection
          general={general}
          handleGeneralChanges={handleGeneralChanges}
        />
      ),
    },
    1: {
      title: 'Education',
      component: (
        <EducationSection
          education={education}
          addNewItem={addNewItem}
          handleEducationChanges={handleEducationChanges}
          removeEducationItem={removeEducationItem}
        />
      ),
    },

    2: {
      title: 'Experience',
      component: (
        <EmploymentSection
          experience={experience}
          addNewItem={addNewItem}
          handleExperienceChanges={handleExperienceChanges}
          removeExperienceItem={removeExperienceItem}
        />
      ),
    },
  };

  useEffect(() => {
    setShowBackButton(step > 0);
    setShowNextButton(step < 2);
  }, [step]);

  return (
    <form className="form">
      <FormHeader
        title={stepComponents[step].title}
        showBackButton={showBackButton}
        showNextButton={showNextButton}
        moveBack={() => {
          setStep((step) => step - 1);
        }}
        moveForward={() => {
          setStep((step) => step + 1);
        }}
      />

      {stepComponents[step].component}
    </form>
  );
};

export default Form;

// [ ] Сделать LocalStorage ( https://youtu.be/GihQAC1I39Q?si=Py07E0sF4rkTXsCY )
