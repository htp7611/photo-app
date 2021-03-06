import React from 'react'
import PropTypes from 'prop-types'
import {Button} from "reactstrap";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  isInvalid: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
  name: '',
  imageUrl: '',
  isInvalid: '',
  onImageUrlChange: null,
  onRandomButtonBlur: null,
}

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {

  const {name, imageUrl, onImageUrlChange, onRandomButtonBlur, isInvalid} = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  }

  return (
      <div className={isInvalid ? `random-photo ${isInvalid} ` : 'random-photo'}>
        <div className='random-photo__button'>
          <Button
              outline
              name={name}
              color='primary'
              onClick={handleRandomPhotoClick}
              onBlur={onRandomButtonBlur}
          >
            Random photo
          </Button>
        </div>
        <div className='random-photo__photo'>
          {imageUrl && <img src={imageUrl} alt='Ooops... not found. Please click random again!'
                            onError={handleRandomPhotoClick}
          />}
        </div>
      </div>
  )
}


export default RandomPhoto

