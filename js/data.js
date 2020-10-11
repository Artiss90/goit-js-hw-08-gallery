import dataGalleryItems from './gallery-items.js'
console.log(dataGalleryItems);

const refs = {
    listGalleryItems: document.querySelector('.js-gallery')
}
console.log(refs.listGalleryItems);

const cardsMarkupGalleryItems = createListGalleryItems(dataGalleryItems)
refs.listGalleryItems.innerHTML = cardsMarkupGalleryItems;

function createListGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
      return `
   <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}