import { galleryItems } from "./gallery-items.js";
// Change code below this line
const basicLightbox = window.basicLightbox;
const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML(
  "beforeend",
  getGalleryListTemplate(galleryItems)
);
galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  const gallaryItem = e.target.closest(".gallery__item");
  if (!gallaryItem) return;

  const img = gallaryItem.querySelector(".gallery__image");
  const src = img.dataset.source;
  showModal(src);
}

function getGalleryListTemplate(array) {
  return array.map((it) => getGalleryItemTemplate(it)).join("");
}

function getGalleryItemTemplate(img) {
  const { description, original, preview } = img;

  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;
}

function showModal(src) {
  const instance = basicLightbox.create(getBigImgTemplate(src));
  instance.show();

  window.addEventListener("keydown", onKeyDown);

  function onKeyDown(e) {
    if (e.key !== "Escape") return;

    instance.close();
    window.removeEventListener("keydown", onKeyDown);
  }
}

function getBigImgTemplate(src) {
  return `
  <img src="${src}" width="800" height="600">
  `;
}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
// return arr.map((it) => getBoxItemTemplate(it)).join("");
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox
