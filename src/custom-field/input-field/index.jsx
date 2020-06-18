import PropTypes from 'prop-types'
import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'


InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text',
  lable: '',
  placeholder: '',
  disabled: false
}

function InputField(props) {
  
  const {field, form, lable, type, placeholder, disabled} = props;
  const {name, value, onChange, onBlur} = field;
  
  return (
    <FormGroup>
      {lable && <Label for={name}>{lable}</Label>}
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}

        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
    </FormGroup>
  )
}


export default InputField

