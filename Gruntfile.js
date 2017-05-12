module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        less: {
        	options: {
        		sourceMap: true
        	},
            target : {
                files: {
                       'dist/style/style.min.css': 'app/less/*.less',
                }
            }
        },
        
        concat: {
            dist: {
                src:['app/js/*.js','app/js/**/*.js'],
                dest:'dist/scripts/script.js'
            }
        },
        uglify: {
            target:{
                files:{'dist/scripts/script.min.js':'dist/scripts/script.js'}
            }
        },
        clean: ['dist/'],
        copy: {
            target: {
                files: [{
                    expand: true,
                    src: ['index.html', 'robots.txt','images/**', 'resources/**', 'fonts/**', 'partials/**', 'libs/**'],
                    dest: 'dist/'
                }],
            },
        },
        watch: {
            watchAll : {
                files : ['app/less/*.less', 'app/js/*.js', 'dist/scripts/script.js', 'partials/*.html', 'index.html'],
                tasks : ['less','concat', 'uglify', 'copy'],
                options:{
                    spawn:true
                }
            }
        },
        
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', []);
};