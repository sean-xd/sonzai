var gulp = require("gulp"),
  concat = require("gulp-concat"),
  src = {
    html: "src/index.html",
    css: ["src/css/fonts.css", "src/main.css", "src/**/*.css"],
    js: ["src/app.js", "src/**/*.js"]
  },
  dest = {html: "public/", partials: "public/partials/", css: "public/", js: "public/"};

gulp.task("html", () => gulp.src(src.html).pipe(gulp.dest(dest.html)));
gulp.task("css", () => gulp.src(src.css).pipe(concat("main.css")).pipe(gulp.dest(dest.css)));
gulp.task("js", () => gulp.src(src.js).pipe(concat("app.js")).pipe(gulp.dest(dest.js)));

gulp.task("default", ["html", "js", "css"]);
gulp.task("watch", ["default"], () => {
  gulp.watch(src.html, ["html"]);
  gulp.watch(src.js, ["js"]);
  gulp.watch(src.css, ["css"]);
});
