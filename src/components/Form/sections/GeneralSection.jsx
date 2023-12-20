import FormField from '../../FormField/FormField';

const GeneralSection = ({ form, step, handleInputChange }) => {
  return (
    <div className="content general">
      <FormField
        updateFormValue={handleInputChange}
        title="Full name"
        labelName="name"
        inputType="text"
        fieldData={{ name: form[step].name, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="E-mail"
        labelName="email"
        inputType="email"
        fieldData={{ name: form[step].email, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Phone number"
        labelName="phone"
        inputType="tel"
        fieldData={{ name: form[step].phone, index: step }}
      />

      <FormField
        updateFormValue={handleInputChange}
        title="Location"
        labelName="address"
        inputType="text"
        fieldData={{ name: form[step].address, index: step }}
      />
    </div>
  );
};

export default GeneralSection;
