'use strict';

module.exports = function(grunt){

	grunt.initConfig({

		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						root:'/autohub',
						staticRoot: '/autohub/public'
					}
				},
				files: {
					'index.html': 'views/pages/index.jade'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('default', ['jade']);

};