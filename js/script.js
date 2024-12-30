const hamburgerBtn = document.querySelector('.hamburger - btn');
const menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
