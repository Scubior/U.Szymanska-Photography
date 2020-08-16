const modal = document.querySelector('.modal-img');
const previews = document.querySelectorAll('.landscapes-gallery img');
const full = document.querySelector('.full-img');
const text = document.querySelector('.full-text');

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        full.classList.add("open");
        //dynamic change text and image
        const fullSrc = preview.getAttribute("data-original");
        full.src= `./full/landscapes/${fullSrc}`;
        const altText = preview.alt;
        text.textContent = altText;

    });
});

modal.addEventListener('click', (e)=>{
    if(e.target.classList.contains("modal-img")){
        modal.classList.remove("open");
        full.classList.remove("open");
    }
})