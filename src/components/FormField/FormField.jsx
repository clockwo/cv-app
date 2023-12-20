/* eslint-disable react/prop-types */
import Input from '../UI/Input';

const FormField = ({
  title,
  labelName,
  inputType,
  updateFormValue,
  fieldData,
}) => {
  return (
    <label htmlFor={labelName}>
      {title}
      <Input
        value={fieldData.name}
        onChange={({ target }) =>
          updateFormValue(fieldData.index, labelName, target.value)
        }
        type={inputType}
        id={labelName}
        className={labelName}
        autoComplete={labelName}
      />
    </label>
  );
};

export default FormField;
