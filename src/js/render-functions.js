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
      <ul>
  <li>
    <p>Likes</p>
    <p>${image.likes}</p>
  </li>
  <li>
    <p>Views</p>
    <p>${image.views}</p>
  </li>
  <li>
    <p>Comments</p>
    <p>${image.comments}</p>
  </li>
  <li>
    <p>Downloads</p>
    <p>${image.downloads}</p>
  </li>
</ul>
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
