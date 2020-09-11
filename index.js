
const images = Array.from(document.querySelectorAll(".small-image"));
const figure = document.querySelector('figure');
const currentImage = document.querySelector('picture');
console.log(figure);

images.forEach(image => image.addEventListener('click', (e) => {
  const small = e.target.dataset;
  const medium = e.target.src;
  const large = e.target;
  const html = `
  <picture class="details_content-figure-picture active-picture">
    <source srcset="${e.target.src}" class="image-active" media="(min-width: 1200px)">
    <source srcset="${e.target.src}" class="image-active" media="(min-width: 640px)">
      <img src="${e.target.src}" alt="${e.target.alt}" class="image-active" />
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