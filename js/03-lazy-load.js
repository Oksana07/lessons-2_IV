/*
 * Лінива загрузка зображень (концепція)
 * - нативна підтримка
 * - події загрузки зображень
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoade, { once: true });
});

function onImageLoade(evt) {
  console.log('Картинка завантажилась');

  evt.target.classList.add('appear');
}
