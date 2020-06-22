import {PHOTO_CATEGORY_OPTIONS} from 'constants/global';
import {FastField, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {Button, FormGroup} from 'reactstrap';
import InputField from 'custom-field/input-field';
import SelectField from 'custom-field/selection-field';
import RandomPhotoField from "../../../../custom-field/random-photo-field";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  onSubmit: null
}

function PhotoForm() {

  const initialValues = {
    title: '',
    categoryId: null
  }
  return (
      <Formik
          initialValues={initialValues}
          onSubmit={values => console.log('Submit form:' + values.photo)}
      >
        {formikProps => {
          const {values, error, touched} = formikProps
          console.log(values, error, touched);

          return (
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

                <FastField
                    name='photo'
                    component={RandomPhotoField}
                    label='Photo'
                />

                <FormGroup>
                  <Button type='submit' color='primary'>Add to album</Button>
                </FormGroup>
              </Form>
          )


        }}
      </Formik>
  );
}

export default PhotoForm;
