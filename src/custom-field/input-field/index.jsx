import PropTypes from 'prop-types'
import React from 'react'
import {FormGroup, Input, Label} from 'reactstrap'
import {ErrorMessage} from "formik";
import FormFeedback from "reactstrap/es/FormFeedback";


InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false
}

function InputField(props) {

  const {field, form, label, type, placeholder, disabled} = props;
  const {name, value, onChange, onBlur} = field;
  const {errors, touched} = form;
  const showError = errors[name] && touched[name]

  return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}

            placeholder={placeholder}
            type={type}
            disabled={disabled}

            invalid={showError}
        />
        <ErrorMessage name={name} component={FormFeedback}/>
      </FormGroup>
  )
}


export default InputField

