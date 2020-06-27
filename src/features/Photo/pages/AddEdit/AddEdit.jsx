import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {addPhoto, editPhoto} from "../../photoSlice";
import Banner from 'components/Banner/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm/PhotoForm';

AddEditPage.propTypes = {};

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector(state => state.photos);
  const {photoId} = useParams();
  const isAddMode = !photoId;
  const initialValues = photoId ? photos.find(photo => photo.id === photoId)
      : {
        title: '',
        categoryId: null,
        photo: ''
      }

  const handleSubmit = (values) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: "60348697-50a6-44a9-9179-004765607162"
          }
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = editPhoto(values);
          dispatch(action);
        }
        history.push('/photos');
        resolve(true);
      }, 2000)
    })
  }

  return (
      <div className='photo-edit'>
        <Banner title='Pick your amazing photo'/>

        <div className='photo-edit__form'>
          <PhotoForm isAddMode={isAddMode} initialValues={initialValues} onSubmit={handleSubmit}/>
        </div>
      </div>
  );
}

export default AddEditPage;
