Grunt is a task runner, Basically used for the automation of build process of any project.
It is a node package so requires npm for installation.
It can be used for compiling css, optimising images and validating JS with JSHint.

For updating npm, use : sudo npm update -g npm
Then for installing use: sudo npm install -g grunt-cli
Grunt-cli is responsible for locating Grunt in your project and configuring Gruntfile.js.

First of all for your project, create a package.json file which lists all the depencies of your project.
Then doing npm install will install all your project dependencies in node_modules directory.(Do add this to .gitignore
so that it doesnt get add up in version control.)

npm install <module> --save-dev
This can be used to add a project as a depencency at a later point of time.

All of the grunt code must be written in a wrapper function as:

module.exports = function(grunt) {
    // Configuration, Tasks and Plugins here.
}

Configuration:
-------------
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    task: {...}
});
