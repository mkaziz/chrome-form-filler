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
    }
  }

});

requirejs([
  'jquery',
  'underscore',
  'backbone',
  'app/viewModel'
  
], function ($, _, Backbone, App) {
  
  this.app = window.app = new App({ el : $("#viewModelContainer") });

});
