import PropTypes from 'prop-types'
import React from 'react'
import Select from 'react-select'
import { FormGroup, Label } from 'reactstrap'

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array
}

SelectField.defaultProps = {
  lable: '',
  placeholder: '',
  disabled: false,
  options: []
}

function SelectField(props) {

  const {field, options, lable, placeholder, disabled} = props;
  const {name, value} = field

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
      {lable && <Label for={name}>Category</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        
        placeholder={placeholder}
        disabled={disabled}
        options={options}
      />
    </FormGroup>
  )
}


export default SelectField

