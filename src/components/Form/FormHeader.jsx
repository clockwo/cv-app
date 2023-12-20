import Button from '../UI/button/Button';

const FormHeader = ({ step, form, moveBack, moveForward }) => {
  return (
    <header className="form__header">
      <h2 className="title">{form[step].id}</h2>
      <div className="buttons">
        {step > 0 && (
          <Button type="button" onClick={moveBack}>
            Back
          </Button>
        )}

        {step < 2 && (
          <Button type="button" onClick={moveForward}>
            Next
          </Button>
        )}
      </div>
    </header>
  );
};

export default FormHeader;
