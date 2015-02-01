var gulp = require('gulp');
var del = require('del');
var shell = require('gulp-shell'); 

var SRC_PATH = 'demo/sample';
var DIST_PATH = 'demo/dist/';
var version = require('./package.json').version;

gulp.task('clean', function() {
	del(DIST_PATH + version, function (err, deletedFiles) {
    	if (err) throw err;
	});
});

gulp.task('docs', ['clean'],  shell.task([ 
  'node_modules/jsdoc/jsdoc.js -a all -c conf.json' +
  ' -t ./ -d ' + DIST_PATH + version + 
  ' -r ' + SRC_PATH + ' -R README.md'
])); 
