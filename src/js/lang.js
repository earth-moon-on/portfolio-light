

let lang_ru = document.querySelectorAll('header__info__lang-ru');
let lang_en = document.querySelectorAll('header__info__lang-en');

lang_ru.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru');
});

lang_en.addEventListener('click', () => {
    localStorage.setItem('lang', 'ru');
    
});