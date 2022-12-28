import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");


let instance;
const items = galleryItems.map(({preview, original, description }) => {
   return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div> `
} ).join("");
console.log(galleryEl, items)
galleryEl.insertAdjacentHTML("beforeend", items);


galleryEl.addEventListener("click", showImg);

function showImg(event){
    
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return
    }
    const {source} =event.target.dataset;

    
     instance = basicLightbox.create(`
	<img src="${source}" alt="img">
`, {
	onShow: (instance) => {document.addEventListener("keydown", onEscape)},
	
	onClose: (instance) => {document.removeEventListener("keydown", onEscape)}
})
instance.show();
}

function onEscape(evt){
if(evt.code === "Escape"){
    instance.close();
}
}
console.dir(galleryItems);


