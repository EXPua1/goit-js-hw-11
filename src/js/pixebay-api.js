import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '44853221-20be0a035158c611166c29677';
const apiUrl = 'https://pixabay.com/api/';

// Функція для пошуку
export default function searchImages(query) {
  // showLoadingIndicator();
  // Кодування пошукового запиту
  const encodedQuery = encodeURIComponent(query);

  // Формування URL з усіма параметрами
  const url = `${apiUrl}?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  // Виконання запиту до API
  return fetch(url) // Вернем промис
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json(); // Возвращаем результат в формате JSON
    });
}
