let mix = require('laravel-mix');


mix.js('src/js/main.js', 'public/js')
    .sass('src/sass/main.scss', 'public/css')
    .copyDirectory('src/fonts', 'public/fonts');