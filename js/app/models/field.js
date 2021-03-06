define([
  'app/base/model'
], function (BaseModel) {

  return BaseModel.extend({
    defaults: {
      cssSelector: '',
      defaultValue: '',
      override: false,
      type: 'text'
    },
    
    initialize: function(opts) {
      if (!!opts) {
        this.cssSelector = opts.cssSelector;
        this.defaultValue = opts.defaultValue;
        this.override = opts.override;
        this.type = opts.type;
      }
    }
  });
});
