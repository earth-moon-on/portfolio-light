import SkilLevelStar from './skil-level-star.js';

document.addEventListener("DOMContentLoaded", (event) => {

    let levelStar = new SkilLevelStar('.skil-level-star');
    levelStar.fill();

    let header__nav = document.querySelector('.header__nav');

    document.querySelector('.header__btn-menu-burger').addEventListener('click', () => {
        header__nav.classList.add('visibility');
    });

    document.querySelector('.header__nav-close').addEventListener('click', () => {
        header__nav.classList.remove('visibility');
    });

});