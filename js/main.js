requirejs.config({
  
  baseUrl: 'js/lib',
  paths: {
    app: '../app'
  },
  
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery' : {
      exports: "$"
    },
    'handlebars': {
        exports: 'Handlebars'
    }
  }

});

requirejs([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'app/viewModel'
  
], function ($, _, Backbone, Handlebars, App) {
  
  this.app = window.app = new App({ el : $("#viewModelContainer") });

});
