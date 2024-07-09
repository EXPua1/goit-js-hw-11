import searchImages from './js/pixebay-api';
import createGallery from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchBtn = document.querySelector('.search button');
const input = document.querySelector('.search input');
const gallery = document.querySelector('.gallery');
let isSearching = false; // Флаг для отслеживания состояния выполнения запроса

searchBtn.addEventListener('click', () => {
  if (isSearching) {
    return; // Если уже выполняется запрос, выходим из функции
  }

  addLoader();
  if (input.value === '') {
    iziToast.info({
      title: 'Внимание',
      message: 'Введите текст для поиска изображений',
      position: 'topRight',
    });
    removeLoader(); // Убираем загрузчик, так как нет запроса
    return;
  }

  isSearching = true; // Устанавливаем флаг выполнения запроса в true

  setTimeout(() => {
    searchImages(input.value)
      .then(data => {
        if (data.hits.length === 0) {
          errorMessage();
        } else {
          createGallery(data.hits);
          input.value = '';
        }
        removeLoader(); // Убираем загрузчик после завершения запроса
        isSearching = false; // Сбрасываем флаг выполнения запроса
      })
      .catch(error => {
        console.error('Ошибка при выполнении поискового запроса:', error);
        errorMessage(); // Отобразим сообщение об ошибке
        removeLoader(); // Убираем загрузчик в случае ошибки
        isSearching = false; // Сбрасываем флаг выполнения запроса
      });
  }, 1000); // Задержка
});

const errorMessage = () => {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
};

// Функция для добавления загрузчика в галерею
function addLoader() {
  gallery.insertAdjacentHTML(
    'afterbegin',
    '<div class="loader">Loading...</div>'
  );
}

// Функция для удаления загрузчика из галереи
function removeLoader() {
  const loader = gallery.querySelector('.loader');
  if (loader) {
    loader.parentNode.removeChild(loader);
  }
}
