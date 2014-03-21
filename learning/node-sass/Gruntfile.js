module.exports = function(grunt) {
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                  'public/stylesheets/application.css' : 'sass/application.scss'
                }
            }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true, //needed to run LiveReload
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', './*.js'],
            options: {
                //options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        }

});
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'jshint', 'watch']);
};
