import SkilLevelStar from './skil-level-star.js';
import { lang_list } from './lang-list.js';

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


    let lang_ru = document.querySelectorAll('.header__info__lang-ru');
    let lang_en = document.querySelectorAll('.header__info__lang-en');

    let lang_attr = document.querySelectorAll('[data-lang]');

    

    lang_ru.forEach((item) => {
        item.addEventListener('click', () => {
            localStorage.setItem('lang', 'ru');
            localStorage.getItem('lang');


        lang_attr.forEach((item) => {
            console.log(item.getAttribute('data-lang'));
            let name = item.getAttribute('data-lang');
            let ru = 'ru';
            // console.log(lang_attr.name)
            // item.innerHTML = (item.getAttribute('data-lang').ru)
            // console.log(lang_attr["nav_about_me"]["ru"])
            let attrr = item.getAttribute('data-lang')
            console.log(lang_attr[item.getAttribute('data-lang')]['ru'])


            // item.innerHTML = lang_attr[item.getAttribute('data-lang')]['ru']

        });
            
        });
    })


    lang_en.forEach((item) => {
        item.addEventListener('click', () => {
            localStorage.setItem('lang', 'en');
            localStorage.getItem('lang');

        });
    })


});