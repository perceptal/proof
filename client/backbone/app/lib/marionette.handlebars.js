Backbone.Marionette.TemplateCache.prototype.load = function() {
  if (this.compiledTemplate) return this.compiledTemplate;

  var html = this.loadTemplate(this.templateId);
  this.compiledTemplate = Handlebars.compile(html);
  return this.compiledTemplate;
};

Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
  var parts = templateId.replace("#", "").split("/");

  var section = _.first(parts)
    , name = parts.slice(1).join("/");

  var url = "/" + section + "/templates/" + name + ".html"
    , template;

	$.ajax({
		url: url
	, async: false
	, dataType: "html"
	, success: function(html) {
			template = html;
		}
  });

  return template;
};