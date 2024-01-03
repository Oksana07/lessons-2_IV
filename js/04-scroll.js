// 1) порахувати висоту хедера
// 2) відслідковуємо скрол
// 3) додати клас, якщо скрол більше розміру хедера

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
pageYOffset;

let headerHeight = header.clientHeight;

function navbarFixed() {
  if (pageYOffset > headerHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', navbarFixed);

console.log(header.clientHeight);

// console.log(header.clientWidth);
