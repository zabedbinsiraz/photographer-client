import React from 'react';
import { IMAGES } from './../HeaderMain';

const Slides = () => (
  IMAGES.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} />)
);

export default Slides;