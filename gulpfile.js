// dependencies
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const htmlmin = require("gulp-htmlmin");

//Func
function compilescss() {
  return src("./src/scss/style.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename((path) => {
        return {
          dirname: path.dirname + "",
          basename: path.basename + ".min",
          extname: ".css",
        };
      })
    )
    .pipe(dest("./dist/css"));
}

function compileimgs() {
  return src("src/assets/**").pipe(dest("./dist/assets/"));
}
function compilehtml() {
  return src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
}
function compilejs() {
  return src("src/js/*.js")
    .pipe(rename("bundle.min.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js/"));
}

//watchtask
const watchTask = () => {
  watch("./src/scss/*.scss", compilescss);
  watch("src/assets/**", compileimgs);
  watch("src/index.html", compilehtml);
  watch("src/js/*.js", compilejs);
};
//def task
exports.default = series(
  compilescss,
  compileimgs,
  compilehtml,
  compilejs,
  watchTask
);
