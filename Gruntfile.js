'use strict';

module.exports = function(grunt) {
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			js: {
				files: [
					'!private/js/*.swp',
					'*.js',
					'Gruntfile.js',
					'private/js/**'
				],
				tasks: ['jshint', 'uglify'],
				options: {
					livereload: true,
				},
			},
			img: {
				files: [
					'private/img/**'
				],
				tasks: ['imagemin'],
				options: {
					livereload: true,
				},
			},
			jst: {
				options: {
					templateSettings: {
						variable: 'data'
					}
				},
				files: [
					'!private/templates/**/*.swp',
					'index.html',
					'private/templates/**/*.ejs'
				],
				tasks: ['jst']
			},
			less: {
				files: [
					'private/less/*.less'
				],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true
			},
			all: [
				'Gruntfile.js',
				'*.js',
				'private/js/**'
			]
		},
		jst: {
			compile: {
				options: {
					templateSettings: {
						variable: 'data'
					}
				},
				files: {
					'js/templates.js': ['private/templates/**/*.ejs']
				}
			}
		},
		less: {
			dist: {
				files: {
					'css/main.min.css': [
						'private/bower_components/bootstrap/dist/css/bootstrap.css',
						'private/bower_components/bootstrap/dist/css/bootstrap-theme.css',
						'private/bower_components/font-awesome/css/font-awesome.css',
						'private/less/app.less'
					]
				},
				options: {
					compress: true,
					sourceMap: true,
					sourceMapFilename: 'css/main.min.css.map',
					sourceMapRootpath: '../',
					sourceMapURL: 'main.min.css.map'
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'js/scripts.min.js': [
						'private/bower_components/jquery/dist/jquery.js',
						'private/bower_components/underscore/underscore.js',
						'private/bower_components/backbone/backbone.js',
						'private/bower_components/marionette/lib/backbone.marionette.js',
						'private/bower_components/bootstrap/dist/js/bootstrap.js',
						'private/js/app.js'
					]
				},
				options: {
					sourceMap: true,
					sourceMapIncludeSources: true,
					sourceMapName: 'js/scripts.min.js.map'
				}
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'private/img/',
					src: '**/*',
					dest: 'img/'
				}]
			}
		},
		copy: {
			fonts: {
				expand: true,
				flatten: true,
				src: [
					'private/bower_components/bootstrap/dist/fonts/*',
					'private/bower_components/font-awesome/fonts/*'
				],
				dest: 'fonts/'
			}
		}
	});

	//Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	grunt.registerTask('createDefaultTemplate', function () {
		grunt.file.write('js/templates.js', 'this.JST = this.JST || {};');
	});

	//Default task(s).
	grunt.registerTask('default', [
		'less',
		'createDefaultTemplate',
		'jst',
		'uglify',
		'imagemin',
		'copy:fonts'
	]);

	grunt.registerTask('dev', [
		'default',
		'watch'
	]);
};
