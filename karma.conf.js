module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/**/*.js',
      'app/test/*.js',
      'partials/directives/*.html'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    preprocessors: {
      '**/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
