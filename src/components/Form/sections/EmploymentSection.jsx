import FormField from '../../FormField/FormField';
const EmploymentSection = ({ form, step, handleInputChange }) => {
  return (
    <div className="content practical">
      <FormField
        updateFormValue={handleInputChange}
        title="Company"
        labelName="company"
        inputType="text"
        fieldData={{ name: form[step].company, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Position"
        labelName="position"
        inputType="text"
        fieldData={{ name: form[step].position, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Responsibilities"
        labelName="responsibilities"
        inputType="text"
        fieldData={{
          name: form[step].responsibilities,
          index: step,
        }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Employment period"
        labelName="employmentPeriod"
        inputType="text"
        fieldData={{
          name: form[step].employmentPeriod,
          index: step,
        }}
      />
    </div>
  );
};

export default EmploymentSection;
