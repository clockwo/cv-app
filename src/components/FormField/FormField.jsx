/* eslint-disable react/prop-types */
import Input from '../UI/Input';

const FormField = ({
  title,
  labelName,
  inputType,
  updateFormValue,
  fieldData,
  index,
}) => {
  const handleChange = (target) => {
    if (index !== undefined) {
      updateFormValue(index, labelName, target.value);
    } else {
      updateFormValue(labelName, target.value);
    }
  };
  return (
    <label htmlFor={labelName}>
      {title}
      <Input
        value={fieldData.name}
        onChange={({ target }) => handleChange(target)}
        type={inputType}
        id={labelName}
        className={labelName}
        autoComplete={labelName}
      />
    </label>
  );
};

export default FormField;
