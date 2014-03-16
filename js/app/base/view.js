define([
  'backbone',
  'handlebars'
], function (Backbone, Handlebars) {

  return Backbone.View.extend({
  
    templateSelector: '',

    viewModel: function () {
      return {
      
      }
    },
    
    template : function () {
      return Handlebars.compile($(this.templateSelector).html());
    },
    
    render: function () {
      var templateFunction = this.template();
      console.log({ selector: this.templateSelector, viewModel: this.viewModel(), template: templateFunction(this.viewModel()) });
      this.$el.html(templateFunction( this.viewModel()));
      //console.log(this.$el.html());
    }
   
  });
});
