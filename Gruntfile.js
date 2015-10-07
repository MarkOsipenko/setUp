module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: ['javascript/index.js'],// Конкретный файл
                dest: 'javascript/build/production.js',
            }
        },

        concat: {
            options: {
              // Task-specific options go here.
            },
            all: {
              src: ["stylesheet/*.css"],
              dest: "stylesheet/build/index.css"
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'stylesheet/build/index.css': 'stylesheet/index.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['javascript/*.js', 'stylesheet/*.css'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: ['stylesheet/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['watch']);

};