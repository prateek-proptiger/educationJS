Configuring Tasks:
-----------------
A simple 'watch' task looks like :

watch: {
  css: {
    files: [
      '**/*.sass',
      '**/*.scss'
    ],
    tasks: ['compass']
  },
  js: {
    files: [
      'assests/js/*.js',
      'Gruntfile.js'
    ],
    tasks: ['jshint']
  }
}

In this there are two targets, one focusses on changes in sass files and other in js.
=> 'files' attribute in both specifies the files to be monitored for changes and 'tasks' defines an array of grunt tasks
to be run once changes are detected in any of the files.

Gruntfile uses 'grunt-contrib-compass' plugin for compiling sass files.
compass: {
  dist: {
    options: {
      sassDir: 'assets/sass', // Directory where sass files are present
      cssDir: 'assets/css', // Target directory where css is to be stored
      outputStyle: 'compressed' // A minified CSS file will be generated
    }
  }
}

JSHint is used to check Javascript code
jshint: {
  options: {
    jshintrc: '.jshintrc' // Documentation here: 'http://jshint.com/docs/options/'
  },
  all: ['Gruntfile.js', 'assets/js/*.js'] // 'all' property specifies the files to check
}


Loading Plugins:
---------------

Plugins need to be specified in package.json and then installed using npm install.
The plugins can be loaded as:
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
