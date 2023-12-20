import FormField from '../../FormField/FormField';

const EducationSection = ({ form, step, handleInputChange }) => {
  return (
    <div className="content education">
      <FormField
        updateFormValue={handleInputChange}
        title="Degree:"
        labelName="degree"
        inputType="text"
        fieldData={{ name: form[step].degree, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="School name:"
        labelName="school"
        inputType="text"
        fieldData={{ name: form[step].school, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="City of school:"
        labelName="city"
        inputType="text"
        fieldData={{ name: form[step].city, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Country:"
        labelName="country"
        inputType="text"
        fieldData={{ name: form[step].country, index: step }}
      />
    </div>
  );
};

export default EducationSection;
