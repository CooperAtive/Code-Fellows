/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      simplemocha: {
          options: {timeout: 3000 },
          all: { src: ['test/**/*.js'] }
      },
      concat: {
          options: {
              separator: ';'
          },
          dist: {
              src: ['src/**/*.js'],
              dest: 'dist/<%= pkg.name %>.js'
          }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                //options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'quint']
        }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['simplemocha', 'jshint']);

};
