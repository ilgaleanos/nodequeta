module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			dist: {
				options: {
					transform: [
						['babelify',
							{
							presets:
								['es2015', 'react', 'stage-0'],
							"plugins":
								["transform-decorators-legacy"]
							}
						]
					]
				},
				src: ['app/main/main.jsx'],
				dest: './static/build/build.js'
			}
		},
		'closure-compiler': {
			frontend: {
				closurePath: '/home/suidi/Documentos/java/server/libs',
				js: './static/build/build.js',
				jsOutputFile: './static/build/build.min.js',
				maxBuffer: 5000,
				options: {
					compilation_level: 'SIMPLE',
					language_in:"ECMASCRIPT6",
					language_out:"ECMASCRIPT3",
				}
			}
		},
		watch: {
			browserify: {
				files: ['app/**/*.jsx'],
				tasks: ['browserify']
			},
			minify:{
				files: ['./static/build/build.js'],
				tasks:['closure-compiler']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-closure-compiler');

	grunt.registerTask('default', ['watch']);

};
