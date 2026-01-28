const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    document.documentElement.style.overflow = 'hidden';
});
close.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});