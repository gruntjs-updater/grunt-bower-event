/*
 * grunt-bower-event
 * https://github.com/dherges/grunt-bower-event
 *
 * Copyright (c) 2014 David Herges
 * Licensed under the MIT license.
 */

'use strict';

var packageJson = require('../package.json');
var BowerTask = require('./lib/BowerTask');
var GruntLogListener = require('./lib/GruntLogListener');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task
  // creation: https://github.com/gruntjs/grunt/blob/devel/docs/toc.md

  new GruntLogListener(grunt);

  grunt.registerMultiTask('bower', packageJson.description, function () {

    /* Move the actual task function in its own prototype in a separate file,
     * hence it is better testable in unit tests. It just looks a wee bit like
     * Java's new Runnable().run() language construct...Oo
     */
    new BowerTask(this, grunt).run();
  });
};
