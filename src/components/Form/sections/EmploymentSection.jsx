import { useState, useEffect } from 'react';
import FormField from '../../FormField/FormField';
import FormHeader from '../FormHeader';

const EmploymentSection = ({
  experience,
  handleExperienceChanges,
  addNewItem,
  removeExperienceItem,
}) => {
  const [step, setStep] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    setShowBackButton(step > 0);
    setShowNextButton(step < experience.length - 1);
    if (experience.length > 0 && step >= experience.length) {
      setStep(experience.length - 1);
    }
  }, [experience.length, step]);

  return (
    <div className="content practical">
      <FormHeader
        title={`Employment ${step + 1}`}
        step={step}
        showBackButton={showBackButton}
        showNextButton={showNextButton}
        canAddItem={true}
        canRemoveItem={true}
        addNewItem={() => addNewItem(false, true)}
        removeItem={() => removeExperienceItem(experience[step])}
        moveBack={() => setStep((step) => step - 1)}
        moveForward={() => setStep((step) => step + 1)}
      />

      {experience.length > 0 && (
        <>
          <FormField
            updateFormValue={handleExperienceChanges}
            title="Company"
            labelName="company"
            inputType="text"
            fieldData={{ name: experience[step].company }}
            index={step}
          />

          <FormField
            updateFormValue={handleExperienceChanges}
            title="Position"
            labelName="position"
            inputType="text"
            fieldData={{ name: experience[step].position }}
            index={step}
          />

          <FormField
            updateFormValue={handleExperienceChanges}
            title="Responsibilities"
            labelName="responsibilities"
            inputType="text"
            fieldData={{ name: experience[step].responsibilities }}
            index={step}
          />

          <FormField
            updateFormValue={handleExperienceChanges}
            title="Employment period"
            labelName="employmentPeriod"
            inputType="text"
            fieldData={{ name: experience[step].employmentPeriod }}
            index={step}
          />
        </>
      )}
    </div>
  );
};

export default EmploymentSection;
