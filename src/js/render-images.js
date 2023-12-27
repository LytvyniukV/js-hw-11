import { getImages } from './request';
import { markup } from './markup';
import { refs } from './refs';
import { showMessage } from './show-message';
import { modalGallery } from './gallery-init';

export const renderImages = event => {
  event.preventDefault();

  refs.gallery.innerHTML = "<div class='loader'></div>";
  getImages()
    .then(images => {
      if (images.hits.length < 1) {
        showMessage();
        refs.gallery.innerHTML = '';
        return;
      }
      refs.gallery.innerHTML = markup(images);
      modalGallery.refresh();
      console.log(images);
    })
    .catch(error => console.log(error));
};
