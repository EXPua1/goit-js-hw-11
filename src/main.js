import { searchImages } from './js/pixebay-api';
import createGallery from './js/render-functions'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const searchBtn = document.querySelector('.search button');
const input = document.querySelector('.search input');

searchBtn.addEventListener('click', () => {
  if (input.value === '') {
    iziToast.info({
      title: 'Внимание',
      message: 'Введите текст для поиска изображений',
      position: 'topRight',
    });
    return;
  }
  searchImages(input.value);
  input.value = '';
   if (input.value === 0) {
        errorMessage();
      } else {
        createGallery(data.hits);
});

//  .then(data => {
//       if (data.hits.length === 0) {
//         errorMessage();
//       } else {
//         createGallery(data.hits);
//       }
//     })
//     .catch(error => {
//       // Обробка помилок
//       iziToast.error({
//         title: 'Error',
//         message: 'Failed to fetch images. Please try again later.',
//         position: 'topRight',
//       });
//       console.error('Error fetching data:', error);
//     })
//     .finally(() => {
//       // Скрыть индикатор загрузки
//       hideLoadingIndicator();
//     });
