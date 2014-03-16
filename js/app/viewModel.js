define([
  'app/base/view',
  'app/collections/fieldCollection',
  'app/views/fieldCollectionView'
], function (BaseView, FieldCollection, FieldCollectionView) {

  return BaseView.extend({
  
    initialize: function (opts) {
    
      this.fieldCollection = new FieldCollection();
      this.fieldCollectionView = new FieldCollectionView({
        fieldCollection: this.fieldCollection,
        el: $("#fieldCollectionViewContainer")
      });
      this.bindEvents();
      this.render();
    },
    
    templateSelector: '#viewModelTemplate',
    
    render : function () {
      this.fieldCollectionView.render();
    },
    
    bindEvents: function() {

    }
  });
});
