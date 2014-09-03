module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'libs/angular/angular.js',
      'libs/angular-route/angular-route.js',
      'libs/angular-mocks/angular-mocks.js',
      'libs/angular-bootstrap/ui-bootstrap.js',
      'libs/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
	    'karma-chrome-launcher',
	    'karma-firefox-launcher',
	    'karma-jasmine',
	    'karma-junit-reporter'
	    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

// 'app/bower_components/angular-route/angular-route.js',
