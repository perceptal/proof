Backbone.Marionette.Renderer.render = function(template, data) {
  return Templates[template](data);
};