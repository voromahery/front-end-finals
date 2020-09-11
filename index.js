
const images = Array.from(document.querySelectorAll(".small-image"));
const figure = document.querySelector('figure');
const currentImage = document.querySelector('picture');
console.log(figure);

images.forEach(image => image.addEventListener('click', (e) => {
  const html = `
    <picture class="details_content-figure-picture active-picture">
      <source srcset="./images/${e.target.name}_lg.jpg" class="image-active" media="(min-width: 1200px)">
      <source srcset="./images/${e.target.name}_md.jpg" class="image-active" media="(min-width: 640px)">
      <img src="./images/${e.target.name}_sm.jpg" alt="${e.target.alt}" class="image-active" />
    </picture>
  `;

  if (e.target.classList.contains('active-small')){
        e.target.classList.remove('active-small');
        e.target.classList.add('not-active');
        currentImage.innerHTML = html;
  } else if (e.target.classList.contains('not-active')) {
        e.target.classList.remove('not-active');
        e.target.classList.add('active-small')
        currentImage.innerHTML = html;
  } 
}))