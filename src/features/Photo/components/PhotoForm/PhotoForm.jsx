import {PHOTO_CATEGORY_OPTIONS} from 'constants/global';
import {FastField, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {Button, FormGroup, Spinner} from 'reactstrap';
import InputField from 'custom-field/input-field';
import SelectField from 'custom-field/selection-field';
import RandomPhotoField from "../../../../custom-field/random-photo-field";
import * as Yup from 'yup';

PhotoForm.propTypes = {
  isAddMode: PropTypes.bool,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  isAddMode: true,
  initialValues: {},
  onSubmit: null
}

function PhotoForm(props) {

  const {initialValues, isAddMode} = props

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),
    categoryId: Yup.number().required('This field is required.').nullable(),
    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired()
    }),
  });

  return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={props.onSubmit}
      >
        {formikProps => {
          const {isSubmitting} = formikProps;

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
                  <Button type='submit' color={isAddMode ? 'primary' : 'success'}>
                    {isSubmitting && <Spinner size="sm"/>}
                    {isAddMode ? 'Add to album' : 'Edit photo'}
                  </Button>
                </FormGroup>
              </Form>
          )


        }}
      </Formik>
  );
}

export default PhotoForm;
