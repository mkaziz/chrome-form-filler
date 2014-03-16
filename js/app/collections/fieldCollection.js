define([
  'app/base/collection',
  'app/models/field'
], function (BaseCollection, Field) {

  return BaseCollection.extend({
    model : Field,
    
    initialize: function (opts) {
      this.add(new Field({
        cssSelector: '#cssSelector',
        defaultValue: 'defaultValue',
        override: false,
        type: 'text'
      }));
    }
  });
});
