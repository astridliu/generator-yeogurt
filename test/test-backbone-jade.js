/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('yeogurt generator backbone + lo-dash', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('yeogurt:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files and folders you expect to exist here.
            'dev/scripts/views/root.js',
            'dev/scripts/templates/root.jade',
            'dev/scripts/routers/root.js',
            'dev/scripts/routers',
            'dev/scripts/templates',
            'dev/scripts/views',
            'dev/index.html'
        ];

        helpers.mockPrompt(this.app, {
            projectName: 'testing',
            versionControl: 'SVN',
            jsFramework: 'Backbone',
            structure: 'Single Page Application',
            jsTemplate: 'Jade',
            jsOption: 'Browserify',
            cssOption: 'SCSS',
            ieSupport: true,
            responsive: true,
            useGA: true,
            useFTP: true,
            jshint: true,
            extras: ['htaccess', 'useBootstrap', 'useFontAwesome', 'useDashboard']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFile(expected);
            done();
        });
    });
});