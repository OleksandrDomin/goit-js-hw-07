import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const items = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');
galleryList.insertAdjacentHTML('beforeend', items);

galleryList.addEventListener("click", onClick);


function onClick(evt)
{
  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`); 
  instance.show();

  galleryList.addEventListener("keydown", onKeydown);
  
  function onKeydown(event){
    if (event.code === "Escape") {
      instance.close();
      galleryList.removeEventListener("keydown", onKeydown);
  }
  };
};



  




