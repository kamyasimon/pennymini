const mix = require('laravel-mix');

/*
////Mix run hot pack code
mix.options({
    hmrOptions: {
        host: 'loclahost:8000',  // mysite.test is my local domain used for testing
       port: 8080,
       
    }
 });
*/

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
