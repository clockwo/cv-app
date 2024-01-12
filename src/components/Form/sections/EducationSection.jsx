import FormField from '../../FormField/FormField';
import FormHeader from '../FormHeader';
import { useEffect, useState } from 'react';

const EducationSection = ({
  education,
  addNewItem,
  handleEducationChanges,
  removeEducationItem,
}) => {
  const [step, setStep] = useState(0);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    setShowBackButton(step > 0);
    setShowNextButton(step < education.length - 1);
    if (education.length > 0 && step >= education.length) {
      setStep(education.length - 1);
    }
  }, [education.length, step]);

  return (
    <div className="content education">
      <FormHeader
        title={`Education ${step + 1}`}
        step={step}
        showBackButton={showBackButton}
        showNextButton={showNextButton}
        canAddItem={true}
        canRemoveItem={true}
        addNewItem={() => addNewItem(true)}
        removeItem={() => removeEducationItem(education[step])}
        moveBack={() => setStep((step) => step - 1)}
        moveForward={() => setStep((step) => step + 1)}
      />
      {education.length > 0 && step < education.length && (
        <>
          <FormField
            updateFormValue={handleEducationChanges}
            title="Degree:"
            labelName="degree"
            inputType="text"
            fieldData={{ name: education[step].degree }}
            index={step}
          />

          <FormField
            updateFormValue={handleEducationChanges}
            title="School name:"
            labelName="school"
            inputType="text"
            fieldData={{ name: education[step].school }}
            index={step}
          />

          <FormField
            updateFormValue={handleEducationChanges}
            title="City of school:"
            labelName="city"
            inputType="text"
            fieldData={{ name: education[step].city }}
            index={step}
          />

          <FormField
            updateFormValue={handleEducationChanges}
            title="Country:"
            labelName="country"
            inputType="text"
            fieldData={{ name: education[step].country }}
            index={step}
          />
        </>
      )}
    </div>
  );
};

export default EducationSection;
