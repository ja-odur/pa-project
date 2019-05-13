import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const ReportForm = ({course, onSave, onChange, saving, errors}) => {
  return (
    <form className=" w-50 mx-auto">
      <h1 className="mx-auto text-center">{ course.id && "Edit Order"} { !course.id && "Add Order"}</h1>
      <TextInput
        name="client"
        label="Client"
        value={course.client}
        onChange={onChange}
        error={errors.client}
      />

      <TextInput
        name="product"
        label="Product"
        value={course.product}
        onChange={onChange}
        error={errors.product}
      />


      <TextInput
        name="importer"
        label="Importer"
        value={course.importer}
        onChange={onChange}
        error={errors.importer}
      />

      <TextInput
        name="importerCost"
        label="Importer's Cost"
        value={course.importerCost}
        onChange={onChange}
        error={errors.importerCost}
      />

      <TextInput
        name="cost"
        label="Cost"
        value={course.cost}
        onChange={onChange}
        error={errors.cost}
      />

      <TextInput
        name="paid"
        label="Paid"
        value={course.paid}
        onChange={onChange}
        error={errors.paid}
      />

      <TextInput
        name="quantity"
        label="Quantity"
        value={course.quantity}
        onChange={onChange}
        error={errors.quantity}
      />

      <div className="text-right pr-3">
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary text-center"
          onClick={onSave}
        />
      </div>

    </form>
  );
};

ReportForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object

};

export default ReportForm;
