import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '44853221-20be0a035158c611166c29677';
const apiUrl = 'https://pixabay.com/api/';

// const errorMessage = () => {
//   iziToast.error({
//     title: 'Error',
//     message:
//       'Sorry, there are no images matching your search query. Please try again!',
//     position: 'topRight',
//   });
// };

// Функція для пошуку
export function searchImages(query) {
  // showLoadingIndicator();
  // Кодування пошукового запиту
  const encodedQuery = encodeURIComponent(query);

  // Формування URL з усіма параметрами
  const url = `${apiUrl}?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  // Виконання запиту до API
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json(); // Возвращаем результат в формате JSON
  });
}

// function showLoadingIndicator() {
//   const loadingIndicatorHTML = `
//     <div id="loading-indicator" style="
//       position: fixed;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       background-color: rgba(0, 0, 0, 0.8);
//       color: #fff;
//       padding: 10px 20px;
//       border-radius: 5px;
//       z-index: 1000;
//     ">
//       Загрузка...
//     </div>`;
//   document.body.insertAdjacentHTML('beforeend', loadingIndicatorHTML);
// }

// function hideLoadingIndicator() {
//   const loadingIndicator = document.getElementById('loading-indicator');
//   if (loadingIndicator) {
//     loadingIndicator.remove();
//   }
// }
