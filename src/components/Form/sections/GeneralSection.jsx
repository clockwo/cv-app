import FormField from '../../FormField/FormField';

const GeneralSection = ({ general, handleGeneralChanges }) => {
  return (
    <div className="content general">
      <FormField
        title="Full name"
        labelName="name"
        inputType="text"
        fieldData={{ name: general.name }}
        updateFormValue={handleGeneralChanges}
      />
      <FormField
        title="E-mail"
        labelName="email"
        inputType="email"
        fieldData={{ name: general.email }}
        updateFormValue={handleGeneralChanges}
      />
      <FormField
        title="Phone number"
        labelName="phone"
        inputType="tel"
        fieldData={{ name: general.phone }}
        updateFormValue={handleGeneralChanges}
      />
      <FormField
        title="Location"
        labelName="address"
        inputType="text"
        fieldData={{ name: general.address }}
        updateFormValue={handleGeneralChanges}
      />
    </div>
  );
};

export default GeneralSection;
