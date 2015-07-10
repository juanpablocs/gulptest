var gulp = require('gulp');
var testPlugin = require('./testPlugin');


gulp.task('demo', function(err){

	console.log(err.toString());
	return err('el error');
});
console.log(gulp);