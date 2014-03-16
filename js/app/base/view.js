define([
  'backbone',
  'handlebars'
], function (Backbone, Handlebars) {

  return Backbone.View.extend({
  
    templateSelector: '',

    viewModel: {},
    
    template : function () {
      return Handlebars.compile($(this.templateSelector).html());
    },
    
    render: function () {
      this.$el.html(this.template($(this.viewModel)));
    }
   
  });
});
