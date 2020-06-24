import Banner from 'components/Banner/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm/PhotoForm';
import React from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {addPhoto} from "../../photoSlice";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    const action = addPhoto(values);
    console.log(action);
    dispatch(action);
    history.push('/photos');
  }

  return (
      <div className='photo-edit'>
        <Banner title='Pick your amazing photo'/>

        <div className='photo-edit__form'>
          <PhotoForm onSubmit={handleSubmit}/>
        </div>
      </div>
  );
}

export default AddEditPage;
