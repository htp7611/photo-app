import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from "react-select";
import { Button, FormGroup, Input, Label } from 'reactstrap';
import InputField from 'custom-field/input-field';
import SelectField from 'custom-field/selection-field';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  onSubmit: null
}

function PhotoForm(props) {

  const initiaValues = {
    title: '',
    categoryId: null
  }
  return (
      <Formik
        initialValues={initiaValues}
      >
        {formikProps => {
          const {values, error, touched} = formikProps
          console.log(values, error, touched);

          return(
            <Form>
              <FastField
                name='title'
                component={InputField}

                lable='Title'
                placeholder='Eg: Wow nature ...'
              />

              <FastField
                name='categoryId'
                component={SelectField}

                lable='Category'
                placeholder="What 's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />

              <FormGroup>
                <Label for='categoryId'>Photo</Label>
                <div><Button type='button' outline color='primary'>Random a photo</Button></div>
                <div>
                  <img width='200px' height='200px' src={Images.COLORFUL_BG} alt='colorful'/>
                </div>
              </FormGroup>

              <FormGroup>
                <Button color='primary'>Add to album</Button>
              </FormGroup>
            </Form>
          )

      
        }}
      </Formik>
  );
}

export default PhotoForm;
