import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";




export function createGallery(imagesData) {
  const gallery = document.querySelector(".gallery");

  // Очистка текущего содержимого галереи
  gallery.innerHTML = "";

  // Создание HTML строк для всех изображений
  const galleryHTML = imagesData.map(image => `
    <a href="${image.largeImageURL}" title="${image.tags}">
      <img src="${image.webformatURL}" alt="${image.tags}">
    </a>
  `).join('');

  // Вставка HTML строки в контейнер галереи
  gallery.insertAdjacentHTML('beforeend', galleryHTML);

  // Инициализация SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "title",
    captionDelay: 250,
    close: true,
    nav: true
    // Другие параметры настройки по вашему выбору
  });
   
}