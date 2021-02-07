
module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        // optionally read package.json
        pkg: grunt.file.readJSON('package.json'),

        // Metadata
        meta: {
            basePath: '../',             // your project path
            srcPath: '../static/scss/',  // where you keep your sass files
            deployPath: '../static/css/' // where you want your compiled css files
        },

        // info banner
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // IMPORTANT: the task configuration
        sass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>target.css' : '<%= meta.srcPath %>source.scss',
                }
            }
        },

        // watch all .scss files under the srcPath
        watch: {
            scripts: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.loadNpmTasks('default', ['sass']);
};
