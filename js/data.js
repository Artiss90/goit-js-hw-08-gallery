import dataGalleryItems from './gallery-items.js'
// console.log(dataGalleryItems);

const refs = {
  listGalleryItems: document.querySelector('.js-gallery'),
  lightboxModal: document.querySelector('.js-lightbox'),
  overlayLightboxModal: document.querySelector('.lightbox__overlay'),
  contentLightboxModal: document.querySelector('.lightbox__content'),
  btnLightboxModal: document.querySelector('.lightbox__button'),
  imgContentLightboxModal: document.querySelector('.lightbox__image')
}
// console.log(refs.listGalleryItems);
// console.log(refs.imgContentLightboxModal);


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

refs.listGalleryItems.addEventListener('click', viewOriginalImageGallery)

function viewOriginalImageGallery(e) {
  e.preventDefault()
  // console.log('целевой:', e.target);
  // console.log('текущий:', e.currentTarget);
  /* если не IMG - пропускаем */
  if (e.target.nodeName !== 'IMG') { return }
  const OriginalImageGallery = e.target.dataset.source
  // console.log(OriginalImageGallery);

  addClassForOpenModal()
  addLinkOriginalImageInModal(OriginalImageGallery)
  //  console.log('this:', refs.imgContentLightboxModal.getAttribute('src'));
}

refs.btnLightboxModal.addEventListener('click', addClassForOpenModal)
refs.overlayLightboxModal.addEventListener('click', addClassForOpenModal)
// refs.overlayLightboxModal.addEventListener('click', removeLinkOriginalImageInModal)

function addClassForOpenModal(e) {
  if (refs.lightboxModal.classList.contains("is-open")) {
    return refs.lightboxModal.classList.remove("is-open"),
      refs.imgContentLightboxModal.removeAttribute('src'),
      refs.imgContentLightboxModal.removeAttribute('alt');
  }
  return refs.lightboxModal.classList.add("is-open");
}
/*заменяем на упрощённую функцию */
// function addClassForOpenModal() {
//     refs.lightboxModal.classList.toggle("is-open")
// }

function addLinkOriginalImageInModal(linkImg) {
  refs.imgContentLightboxModal.setAttribute('src', `${linkImg}`)
}

function removeLinkOriginalImageInModal() {
  if (!refs.lightboxModal.classList.contains("is-open")) {
    refs.imgContentLightboxModal.setAttribute('src', '')
    // console.log('src-', refs.imgContentLightboxModal.attributes('src'))
  }
}