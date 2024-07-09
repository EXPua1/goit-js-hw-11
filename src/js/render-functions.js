import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(imagesData) {
  const gallery = document.querySelector('.gallery');

  // Очистка текущего содержимого галереи
  gallery.innerHTML = '';

  // Создание HTML строк для всех изображений
  const galleryHTML = imagesData
    .map(
      image => `
    <div class="card">
      <a href="${image.largeImageURL}" title="${image.tags}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <div class="card-info">
        <div class="likes-info">
        <p>Likes</p>
      <p class="likes-count">${image.likes}</p> <!-- Отображение количества лайков -->
    </div>
    <div class="likes-info">
    <p>Views</p>
        <p>${image.views}</p>
        </div>
        <div class="likes-info">
    <p>Comments</p>
        <p> ${image.comments}</p>
        </div>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');

  // Вставка HTML строки в контейнер галереи
  gallery.insertAdjacentHTML('beforeend', galleryHTML);

  // Инициализация SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
    nav: true,

    // Другие параметры настройки по вашему выбору
  });
}
