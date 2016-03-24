Tutorial#2 (Preparing new Grunt Project)
----------
Can be seen through package.json and doing npm install.
Working of package.json can be understood as a place for specify the name, version, author and dependencies of the project.

Tutorial#3 (Minifying CSS files)
----------
Install plugin as: sudo npm install grunt-contrib-css-min --save-dev.
Define task as:

cssmin: {
  my_target: {
    files: [{
      expand: true,
      cwd: '/css',
      src: ['*.css', '!*.min.css'],
      dest: 'css/'
      ext: 'min.css'
    }]
  }
}

Load the plugin as grunt.loadNpmTasks('grunt-contrib-css-min');

Now add a CSS file to 'css/' and Run: grunt cssmin, you will see the minified file in 'css/' folder.
We can also combine CSS files as:

cssmin: {
  my_target: {
    combine: {
      files: {
        'css/style.css': ['css/style2.css', 'css/style.css']
      }
    }
  }
}

Tutorial#4 (Minify JS files)
----------
