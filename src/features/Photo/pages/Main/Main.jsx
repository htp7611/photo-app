import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {Container} from 'reactstrap';
import {removePhoto} from '../../photoSlice';

import Banner from "../../../../components/Banner/Banner";
import Images from "../../../../constants/images";
import PhotoList from "../../components/PhotoList";

MainPage.propTypes = {};

function MainPage() {

  const photos = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  }

  const handleDeleteClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  }

  return (
      <div className='photo-main'>
        <Banner title='Your awesome photos' backgroundUrl={Images.PINK_BG}/>

        <Container className='text-center'>
          <Link to='/photos/add'>Add new photo</Link>

          <PhotoList
              photoList={photos}
              onPhotoEditClick={handleEditClick}
              onPhotoRemoveClick={handleDeleteClick}
          />
        </Container>
      </div>
  );
}

export default MainPage;
