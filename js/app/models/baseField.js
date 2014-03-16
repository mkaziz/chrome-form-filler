define([
  'app/base/model'
], function (BaseModel) {

  return BaseModel.extend({
    defaults: {
      cssSelector: '',
      value: '',
      override: false,
      type: 'text'
    },
    
    initialize: function(opts) {
      if (!!opts) {
        this.cssSelector = opts.cssSelector;
        this.value = opts.value;
        this.override = opts.override;
        this.type=opts.type;
      }
    }
  });

}
