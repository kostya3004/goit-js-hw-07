import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageGallery = document.querySelector(".gallery")

const markup = galleryItems.map(item =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("")

imageGallery.insertAdjacentHTML('beforeend', markup)

imageGallery.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault();
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" heigth="600">`,
        {   onShow: instance => { document.addEventListener('keydown', escape); },
            onClose: instance => { document.removeEventListener('keydown', escape); },
        })
    instance.show()

    function escape(event) {
        if (event.code !== 'Escape') {
            return
        }
        instance.close();
    }
}