requirejs.config({
  baseUrl: 'js/lib',
  
  paths: {
    app: '../app'
  }

});

requirejs([
  'jquery'
  
], function ($) {

  alert("welcome to options");

});
