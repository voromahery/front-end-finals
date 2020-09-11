// Grab element from the html
const images = Array.from(document.querySelectorAll(".small-image"));
const currentImage = document.querySelector('picture');
console.log(currentImage);

// Add event on each image
images.forEach(image => image.addEventListener('click', (e) => {
  // Create a block of html
  const html = `
      <source srcset="./images/${e.target.id}_lg.jpg" class="image-active" media="(min-width: 1200px)">
      <source srcset="./images/${e.target.id}_md.jpg" class="image-active" media="(min-width: 375px)">
      <img src="./images/${e.target.id}_sm.jpg" alt="${e.target.alt}" class="image-active" />
  `;

// Condition for active image
  if (e.target.classList.contains('active-small')){
        e.target.classList.remove('active-small');
        e.target.classList.add('not-active');
        return currentImage;
// Condition for the deactivated image
  } else if (e.target.classList.contains('not-active')) {
        e.target.classList.remove('not-active');
        e.target.classList.add('active-small')
        currentImage.innerHTML = html;
  } 
}))