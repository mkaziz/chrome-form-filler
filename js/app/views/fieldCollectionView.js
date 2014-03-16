define([
  'app/base/view',
  'app/models/field'
], function (BaseView, Field) {

  return BaseView.extend({
  
    initialize: function (opts) {
      
      this.fieldCollection = opts.fieldCollection;
      this.render();
      //$("#addNewField").on("click", _(this.didAddNewField).bind(this));
    },
    
    templateSelector: '#fieldCollectionViewTemplate',
    
    viewModel: function () {
      return {
        fieldCollection : this.fieldCollection.toJSON()
      }
    },
    
    events: {
      "click #addNewField" : "didAddNewField"
    },
    
    didAddNewField: function() {
      this.fieldCollection.add(new Field({}));
      this.render();
    }
    
  });
});
