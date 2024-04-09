const burgerButton = document.getElementById('burger');
const header = document.getElementById('header');

burgerButton.addEventListener('click', () => {
    header.classList.toggle('active');
});