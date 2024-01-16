import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulGallery = document.querySelector(".gallery");
const liGallery = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}" />
    </a></li>`
  )
  .join("");

ulGallery.innerHTML = liGallery;


//MODAL


ulGallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}">
    `);
    instance.show();

    const closeOnEscape = (event) => {
      if (event.code === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeOnEscape);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
  }
});