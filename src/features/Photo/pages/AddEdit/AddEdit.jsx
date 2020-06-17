import React from 'react';
import Banner from "../../../../components/Banner/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
      <div className='photo-edit'>
        <Banner title='Pick your amazing photo' />

        <div className='photo-edit__form'>
          <PhotoForm onSubmit={values => console.log('form submit: ', values)}/>
        </div>
      </div>
  );
}

export default AddEditPage;
