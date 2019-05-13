import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group row mx-auto text-center';

  if (error && error.length > 0){
    wrapperClass += " "+ 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="col-sm-3 col-form-label text-right font-weight-bold">{label}</label>
      <div className="col-sm-9">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
