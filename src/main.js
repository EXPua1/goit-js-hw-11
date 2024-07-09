import { searchImages } from './js/pixebay-api';
import { createGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const search = document.querySelector('.search');
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
});
