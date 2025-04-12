import { getImagesByQuery } from './pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term', position: 'topRight' });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(images);
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Please try again later.', position: 'topRight' });
    console.error(error);
  } finally {
    hideLoader();
  }
});