var elixir = require('laravel-elixir');
// require('laravel-elixir-copy-fonts');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .sass([
            '../../../bower_components/sweetalert/dev/sweetalert.scss'
        ], './public/css/plugins.css')
        .sass([
            'app.scss'
        ], './public/css/app.css')
        .copy(
            './resources/images',
            './public/images/'
        )

        .webpack([
            '../../../bower_components/sweetalert/dist/sweetalert.min.js'
        ], './public/js/plugins.js')
        .webpack([
            'Config.es6.js',
            'App.es6.js'
        ], './public/js/app.js');
});


