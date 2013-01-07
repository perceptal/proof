Backbone.Marionette.TemplateCache.prototype.load = function() {
  if (this.compiledTemplate) return this.compiledTemplate;

  var html = this.loadTemplate(this.templateId);
  this.compiledTemplate = Handlebars.compile(html);
  return this.compiledTemplate;
};

Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
  var id = templateId.replace("#", "").split("/")
    , url = "/" + id[0] + "/templates/" + id[1] + ".html"
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