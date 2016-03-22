Register Task:
-------------
The grunt.registerTask is used to define a set of tasks to be executed when grunt command is run.
grunt.registerTask('default', ['watch']);

Running Grunt:
-------------
Executing just 'grunt' will run all the tasks specified in 'default' task.
For running an individual task use: 'grunt compass'

Adding new plugins:
------------------
A very neat tool to update CSS in the browser without refreshing the page: 'grunt-browser-sync'.

A new plugin can be installed using: npm install grunt-browser-sync --save-dev.
Then it needs to be loaded in Gruntfile.js as: grunt.loadNpmTasks('grunt-browser-sync');
