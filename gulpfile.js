const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// Compilar SASS

function css( ) {
    return src ('src/sass/app.sass')
        .pipe( sass())
        .pipe( dest('./build/css') )
}


            function minificarcss () {
                return src('src/sass/app.sass')
                    .pipe( sass({
                        outputStyle: 'compressed'
                    }))
                    .pipe( dest('./build/css') )
            }
            function minificarscss () {
                return src('src/sass/app.sass')
                    .pipe( sass({
                        outputStyle: 'compressed'
                    }))
                    .pipe( dest('./build/css') )
            }
            

function watchArchivos() {
    watch ('src/sass/**/*.sass', css); // * - La carpeta actual
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;
exports.minificarscss = minificarscss;
