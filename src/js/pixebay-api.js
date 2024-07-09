import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createGallery } from "./render-functions";

const apiKey = '44853221-20be0a035158c611166c29677';
const apiUrl = "https://pixabay.com/api/";

const errorMessage = () => {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight'
  });
};

// Функція для пошуку 
export function searchImages(query) {
  // Кодування пошукового запиту
  const encodedQuery = encodeURIComponent(query);
  
  // Формування URL з усіма параметрами
  const url = `${apiUrl}?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  // Виконання запиту до API
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json(); // Возвращаем результат в формате JSON
    })
    .then(data => {
      if (data.hits.length === 0) {
        errorMessage();
      } else {
        createGallery(data.hits); // Создаем галерею на основе полученных данных
      }
    })
    .catch(error => {
      // Обробка помилок
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight'
      });
      console.error('Error fetching data:', error);
    });
}
