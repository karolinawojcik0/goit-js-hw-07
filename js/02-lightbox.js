import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulGallery = document.querySelector(".gallery");
const liGallery = galleryItems
  .map(
    (image) =>
      `<li><a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></li>`
  )
  .join("");
ulGallery.innerHTML = liGallery;

const lightBox = new SimpleLightbox(".gallery li a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});