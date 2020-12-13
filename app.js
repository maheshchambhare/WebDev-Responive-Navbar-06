const menu = document.querySelector('#mobile');
const menulinks = document.querySelector('.nav-list');


menu.addEventListener('click', () => {

    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');


});