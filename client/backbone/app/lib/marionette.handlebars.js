Backbone.Marionette.TemplateCache.get = function(templateId, callback) {
  var cachedTemplate = this.templateCaches[templateId];

  if (!cachedTemplate) {
    cachedTemplate = new Marionette.TemplateCache(templateId);
    this.templateCaches[templateId] = cachedTemplate;
  }

  return cachedTemplate.load(callback);
}

Backbone.Marionette.TemplateCache.prototype.load = function(callback) {
  if (this.compiledTemplate) return callback(this.compiledTemplate);

  var template = this.loadTemplate(this.templateId, function(html) {
	  this.compiledTemplate = Handlebars.compile(html);
	  return callback(this.compiledTemplate);
  });
}

Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId, callback) {
  var id = template.replace("#", "").split("/")
    , url = "/app/" + id[0] + "/templates/" + id[1] + ".html";

	$.get(url, function(html) {
  	callback(html);
  });
};

Backbone.Marionette.Renderer.renderTemplate = function(templateId, data) {
	var renderer = $.Deferred();
  
  Backbone.Marionette.TemplateCache.get(templateId, function(template) {
  	var html = template(data);
    renderer.resolve(html);
  });
  
  return renderer.promise();
};