import { getImages } from './request';
import { markup } from './markup';
import { refs } from './refs';

export const renderImages = event => {
  event.preventDefault();

  getImages()
    .then(images => {
      refs.gallery.innerHTML = markup(images);
      console.log(images);
    })
    .catch(error => console.log(error));
};
