import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import {FormGroup, Label} from 'reactstrap'
import FormFeedback from "reactstrap/es/FormFeedback";
import {ErrorMessage} from "formik";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array
}

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: []
}

function SelectField(props) {

  const {field, form, options, label, placeholder, disabled} = props;
  const {name, value} = field;
  const {errors, touched} = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(selection => selection.value === value);

  function handleSelectedOptionChange(selectionOption) {
    const selectedValue = selectionOption ? selectionOption.value : selectionOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }

  return (
      <FormGroup>
        {label && <Label for={name}>Category</Label>}
        <Select
            id={name}
            {...field}
            value={selectedOption}
            onChange={handleSelectedOptionChange}

            placeholder={placeholder}
            disabled={disabled}
            options={options}

            className={showError ? 'is-invalid' : ''}
        />
        <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
  )
}


export default SelectField

