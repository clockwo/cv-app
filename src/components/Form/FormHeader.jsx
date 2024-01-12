import Button from '../UI/button/Button';

const FormHeader = ({
  title = 'test',
  showBackButton,
  showNextButton,
  canAddItem,
  canRemoveItem,
  removeItem,
  addNewItem,
  moveBack,
  moveForward,
}) => {
  return (
    <header className="form__header">
      <h2 className="title">{title}</h2>
      <div className="buttons">
        {showBackButton && (
          <Button type="button" onClick={moveBack}>
            Back
          </Button>
        )}

        {showNextButton && (
          <Button type="button" onClick={moveForward}>
            Next
          </Button>
        )}

        {canAddItem && !showNextButton && (
          <Button type="button" onClick={addNewItem}>
            Add{' '}
          </Button>
        )}
        {canRemoveItem && (showBackButton || showNextButton) && (
          <Button type="button" onClick={removeItem}>
            Remove
          </Button>
        )}
      </div>
    </header>
  );
};

export default FormHeader;
