var es = require('event-stream');
var gutil = require('gulp-util');

var testPlugin = function(file, opc) 
{
	console.log(this);
	console.log(file);
	console.log(opc);
	return es.map(function(file, cb)
	{
		console.log(file);
		console.log(cb);
		cb(null, file);
	});
};
module.exports = testPlugin;