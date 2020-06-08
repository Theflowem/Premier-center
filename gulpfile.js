var gulp = require("gulp");       //  сам галп
var sass = require("gulp-sass"); // компилятор sass

 
// Define tasks after requiring dependencies
function style() {
  // Where should gulp look for the sass files?
  // My .sass files are stored in the styles folder
  // (If you want to use scss files, simply look for *.scss files instead)
  return (
      gulp
          .src("scss/*.scss") // Взять файл style.scss

          // Use sass with the files found, and log any errors
          .pipe(sass()) // Компилироваться style.scss > style.css
          .on("error", sass.logError)

          // What is the destination for the compiled file?
          .pipe(gulp.dest("css"))
  );
}

// task = Задача

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;

// watch = Смотреть

function watch(){
  // gulp.watch takes in the location of the files to watch for changes
  // and the name of the function we want to run on change
  gulp.watch('scss/*.scss', style)
}
  
// Don't forget to expose the task!
exports.watch = watch