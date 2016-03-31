Tutorial#5 (The Default task)
----------
The tasks we want to run by default if none is specified comes under 'default' task.
Specified as: grunt.registerTask('default', ['uglify']);

There is also a key: 'preserveComments': 'all' while minifying for preserving the comments.

Tutorial#6 (Concatenating Files)
----------
Plugin to install would be : sudo npm install grunt-contrib-concat --save-dev
Then load the task.

concat: {
  options: {
    seperator: ';',
    stripBanners: true,
    banner: '/*! <%= pkg.name %> -v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
  },
  dist: {
    src: ['js/input2.js', 'js/input3.js'],
    dest: 'js/main.min.js'
  }
}

Tutorial#7 (Compiling SASS to CSS)
----------
sudo npm install grunt-contrib-sass --save-dev

sass: {
  dist: {
    files: {
      'css/style.css': 'sass/style.scss'
    }
  }
}

Tutorial#8 (Using the watch task)
----------
sudo npm install grunt-contrib-watch --save-dev

watch: {
  sass: {
    files: ['sass/*.scss'],
    tasks: ['sass', 'cssmin']
  }
}

Tutorial#9 (Remove unused CSS)
----------
sudo npm install grunt-uncss --save-dev

uncss: {
  dist: {
    files: {
      'css/style.css': ['index.html']
    }
  }
}


Tutorial#10 (Less files to CSS)
-----------
sudo npm install grunt-contrib-less --save-dev

less: {
  development: {
    options: {
      paths: ["less/"]
    },
    files: {
      'css/style.css': 'less/source.less'
    }
  }
}
