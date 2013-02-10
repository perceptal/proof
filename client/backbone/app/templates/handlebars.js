this["Templates"] = this["Templates"] || {};

Handlebars.registerPartial("button", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "  <button autocomplete=\"off\" data-loading-text=\"<i class='icon-spin icon-spinner icon-white'></i>&nbsp;&nbsp;";
  stack1 = depth0.loading;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "\" class=\"btn btn-success\" id=\"save\"><i class=\"icon-";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " icon-white\"></i>&nbsp;&nbsp;";
  stack1 = depth0.text;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + " &rarr;</button>\n";
  return buffer;}));

Handlebars.registerPartial("file", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"control-group\">\n  <label for=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.label;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n  <div class=\"controls\">\n    <input type=\"file\" id=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" tabindex=\"-1\" name=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"span";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-error-style=\"tooltip\">\n  </div>\n</div>\n";
  return buffer;}));

Handlebars.registerPartial("input", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return " required ";}

  buffer += "<div class=\"control-group\">\n  <label for=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.label;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n  <div class=\"controls\">\n    <input type=\"text\" id=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" name=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"span";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.required;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" value=\"";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-error-style=\"tooltip\">\n  </div>\n</div>\n";
  return buffer;}));

Handlebars.registerPartial("select", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n        ";
  foundHelper = helpers.option;
  stack1 = foundHelper ? foundHelper.call(depth0, depth0, {hash:{}}) : helperMissing.call(depth0, "option", depth0, {hash:{}});
  buffer += escapeExpression(stack1) + "\n      ";
  return buffer;}

  buffer += "<div class=\"control-group\">\n  <label for=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.label;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n  <div class=\"controls\">\n    <select id=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" name=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" style=\"width: ";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n\n      ";
  stack1 = depth0.value;
  stack2 = depth0.options;
  foundHelper = helpers.options;
  stack1 = foundHelper ? foundHelper.call(depth0, stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)}) : helperMissing.call(depth0, "options", stack2, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </div>\n</div>\n";
  return buffer;}));

Handlebars.registerPartial("tags", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"control-group clearfix\">\n  <label for=\"";
  foundHelper = helpers.field;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.field; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.label;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n  <div class=\"controls\">\n    <input type=\"hidden\" id=\"tags\" name=\"tags\" class=\"span";
  foundHelper = helpers.width;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" value=\"";
  foundHelper = helpers.value;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-error-style=\"tooltip\">\n  </div>\n</div>\n";
  return buffer;}));

this["Templates"]["administration/organisations/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert fade in\">\n  <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.not_found", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.not_found", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n</div>\n";
  return buffer;});

this["Templates"]["administration/organisations/filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.organisations", {hash:{}}) : helperMissing.call(depth0, "t", "main.organisations", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n<form class=\"navbar-form pull-left\">\n  <input type=\"text\" class=\"span3 search\" id=\"search\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.search", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.search", {hash:{}});
  buffer += escapeExpression(stack1) + "&rarr;\"/>\n</form>\n\n<div class=\"btn-toolbar\" style=\"margin: 0\">\n  <div class=\"btn-group\">\n\n    <button class=\"btn\" data-toggle=\"dropdown\" href=\"#\">\n      ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.sort", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.sort", {hash:{}});
  buffer += escapeExpression(stack1) + "\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li><a class=\"sort\" href=\"#\" data-sort=\"description\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.description", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.description", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a class=\"sort\" href=\"#\" data-sort=\"code\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.code", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.code", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n    <button class=\"btn refresh\" href=\"#\"><i class=\"icon-refresh\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.all", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.all", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n  </div>    \n  <div class=\"btn-group pull-right\">\n    <button class=\"btn btn-success\" href=\"#\"><i class=\"icon-cog icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.register", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.register", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n  </div>\n</div>\n\n\n";
  return buffer;});

this["Templates"]["administration/organisations/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  ";
  stack1 = {};
  stack1['field'] = "description";
  stack2 = depth0.description;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['required'] = true;
  stack1['label'] = "organisations.description";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "code";
  stack2 = depth0.code;
  stack1['value'] = stack2;
  stack1['width'] = 2;
  stack1['required'] = true;
  stack1['label'] = "organisations.code";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n</fieldset>\n";
  return buffer;});

this["Templates"]["administration/organisations/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-page=\"";
  foundHelper = helpers.page;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"item ";
  foundHelper = helpers.active;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.active; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/";
  foundHelper = helpers.page;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n  <small>";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</small>\n  <i class=\"icon-chevron-right\"></i>\n</a>\n";
  return buffer;});

this["Templates"]["administration/organisations/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header class=\"navbar\" id=\"filter\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <nav id=\"selector\"></nav>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\">\n        <div id=\"menu\"></div>\n\n        <div id=\"message\"></div>\n\n        <div id=\"inner\"></div>\n\n        <aside id=\"aside\" class=\"auto-height\"></aside>\n      </div>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["administration/organisations/menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"navbar navbar-static-top\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" data-page=\"info\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n    <ul class=\"nav\">\n      <li><a data-page=\"info\" data-action=\"role\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.info", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.info", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"photos\" data-action=\"photo\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "photos.photos", {hash:{}}) : helperMissing.call(depth0, "t", "photos.photos", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"documents\" data-action=\"document\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/documents\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.documents", {hash:{}}) : helperMissing.call(depth0, "t", "documents.documents", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"locations\" data-action=\"location\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/locations\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.locations", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.locations", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"security\" data-action=\"role\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/security\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.security", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.security", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n    <ul class=\"nav pull-right action\">\n      <li><a data-page=\"photo\" data-action=\"photo\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photo\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "photos.upload", {hash:{}}) : helperMissing.call(depth0, "t", "photos.upload", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"document\" data-action=\"document\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/document\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.upload", {hash:{}}) : helperMissing.call(depth0, "t", "documents.upload", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"role\" data-action=\"role\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/role\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.add_role", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.add_role", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"location\" data-action=\"location\" href=\"#administration/organisations/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/location\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.add_location", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.add_location", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n  </div>\n</div>\n";
  return buffer;});

this["Templates"]["administration/organisations/selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<ul class=\"list\"></ul>\n\n<div class=\"pagination pagination-centered\"></div>";});

this["Templates"]["administration/organisations/summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<h4 class=\"organisation\">";
  foundHelper = helpers.description;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " <small>";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</small></h4>\n<div class=\"image\"><img src=\"/api/photos/";
  foundHelper = helpers.defaultPhoto;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.defaultPhoto; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/view/small\"></img></div>\n<button class=\"btn btn-danger\" href=\"#\"><i class=\"icon-ban-circle icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.archive", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.archive", {hash:{}});
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.code;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.code; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</button>\n";
  return buffer;});

this["Templates"]["app/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"navbar navbar-inverse\">\n  <div class=\"navbar-inner\">\n    <div class=\"container-fluid\">\n      <a class=\"brand\" href=\"#\"><span class=\"logo\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.title", {hash:{}}) : helperMissing.call(depth0, "t", "main.title", {hash:{}});
  buffer += escapeExpression(stack1) + "</span></a>\n\n      <div id=\"security\"></div>\n      <div id=\"locale\"></div>\n      \n    </div>\n  </div>\n</nav> ";
  return buffer;});

this["Templates"]["app/locale"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<ul class=\"pull-right nav\">\n  <li class=\"fr\"><a class=\"locale\" href=\"#fr\" data-locale=\"fr\">français</a></li>\n  <li class=\"de\"><a class=\"locale\" href=\"#de\" data-locale=\"de\">deutsch</a></li>\n  <li class=\"en\"><a class=\"locale\" href=\"#en\" data-locale=\"en\">english</a></li>\n</ul>\n";});

this["Templates"]["app/message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert alert-";
  foundHelper = helpers.color;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " fade in\">\n	<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n  <i class=\"icon ";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></i>&nbsp;<strong>";
  foundHelper = helpers.heading;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.heading; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</strong> ";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n</div>\n";
  return buffer;});

this["Templates"]["app/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul>\n  <li><a class=\"home\" href=\"#\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.home", {hash:{}}) : helperMissing.call(depth0, "t", "main.home", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"right\"><i class=\"icon-globe icon-white\"></i></a></li>\n  <li><a class=\"people\" href=\"#people\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.people", {hash:{}}) : helperMissing.call(depth0, "t", "main.people", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"right\"><i class=\"icon-user icon-white\"></i></a></li>\n  <li><a class=\"administration\" href=\"#administration\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.administration", {hash:{}}) : helperMissing.call(depth0, "t", "main.administration", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"right\"><i class=\"icon-cog icon-white\"></i></a></li>\n  <li><a class=\"support\" href=\"#support\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.support", {hash:{}}) : helperMissing.call(depth0, "t", "main.support", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"right\"><i class=\"icon-info-sign icon-white\"></i></a></li>\n</ul>\n";
  return buffer;});

this["Templates"]["app/question"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"alert alert-";
  foundHelper = helpers.color;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " fade in\">\n  <h4 class=\"alert-heading\">";
  foundHelper = helpers.heading;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.heading; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h4>\n  <p>";
  foundHelper = helpers.text;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</p>\n  <p>\n    <button class=\"btn btn-danger yes\">";
  stack1 = depth0.yes;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n    <button class=\"btn no\">";
  stack1 = depth0.no;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n  </p>\n</div>\n";
  return buffer;});

this["Templates"]["documents/container"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<thead>\n  <tr>\n    <th>&nbsp;</th>\n    <th>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.title", {hash:{}}) : helperMissing.call(depth0, "t", "documents.title", {hash:{}});
  buffer += escapeExpression(stack1) + "</th>\n    <th>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.tags", {hash:{}}) : helperMissing.call(depth0, "t", "documents.tags", {hash:{}});
  buffer += escapeExpression(stack1) + "</th>\n    <th>&nbsp;</th>\n  </tr>\n</thead>\n\n<tbody></tbody>\n";
  return buffer;});

this["Templates"]["documents/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<td colspan=\"4\">\n  <div class=\"alert\">\n    <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.not_found", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "documents.not_found", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n  </div>\n</td>\n";
  return buffer;});

this["Templates"]["documents/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<td><i class=\"icon ";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></i></td>\n<td>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</td>\n<td>";
  stack1 = depth0.tags;
  foundHelper = helpers.formattags;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "formattags", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</td>\n<td class=\"actions\"><a href=\"#\" class=\"delete\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.delete", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "general.delete", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></td>\n";
  return buffer;});

this["Templates"]["documents/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  ";
  stack1 = {};
  stack1['field'] = "title";
  stack2 = depth0.title;
  stack1['value'] = stack2;
  stack1['required'] = true;
  stack1['width'] = 4;
  stack1['label'] = "documents.title";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "file";
  stack1['width'] = 4;
  stack1['label'] = "documents.file";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "file", {hash:stack1}) : helperMissing.call(depth0, "include", "file", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['width'] = 4;
  stack1['label'] = "documents.tags";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "tags", {hash:stack1}) : helperMissing.call(depth0, "include", "tags", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['icon'] = "upload";
  stack1['loading'] = "general.uploading";
  stack1['text'] = "documents.upload";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "button", {hash:stack1}) : helperMissing.call(depth0, "include", "button", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n</fieldset>\n";
  return buffer;});

this["Templates"]["home/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header id=\"top\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <div id=\"summary\"></div>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\">\n        <div id=\"menu\"></div>\n\n        <div id=\"message\"></div>\n\n        <div id=\"inner\"></div>\n\n        <aside id=\"aside\" class=\"auto-height\"></aside>\n      </div>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["home/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.home", {hash:{}}) : helperMissing.call(depth0, "t", "main.home", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n\n<ul class=\"nav nav-pills\">\n  <li class=\"active\"><a data-page=\"info\" href=\"#profile\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.profile", {hash:{}}) : helperMissing.call(depth0, "t", "main.profile", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li><a data-page=\"photos\" href=\"#notifications\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.notifications", {hash:{}}) : helperMissing.call(depth0, "t", "main.notifications", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n</ul>\n";
  return buffer;});

this["Templates"]["home/summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<h4 class=\"person\">";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.firstName;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + " ";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.lastName;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</h4>\n<p>\n  <a href=\"tel:";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.telephone;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.telephone;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</a>\n</p>\n<p>\n  <a href=\"mailto:";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.person;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.email;
  foundHelper = helpers.formatEmail;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "formatEmail", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n</p>\n\n\n";
  return buffer;});

this["Templates"]["people/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert fade in\">\n  <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.not_found", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "people.not_found", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n</div>\n";
  return buffer;});

this["Templates"]["people/filter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.people", {hash:{}}) : helperMissing.call(depth0, "t", "main.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n<form class=\"navbar-form pull-left\">\n  <input type=\"text\" class=\"span3 search\" id=\"search\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.search", {hash:{}}) : helperMissing.call(depth0, "t", "people.search", {hash:{}});
  buffer += escapeExpression(stack1) + "&rarr;\"/>\n</form>\n\n<div class=\"btn-toolbar\" style=\"margin: 0\">\n  <div class=\"btn-group\">\n\n    <button class=\"btn\" data-toggle=\"dropdown\" href=\"#\">\n      ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.sort", {hash:{}}) : helperMissing.call(depth0, "t", "people.sort", {hash:{}});
  buffer += escapeExpression(stack1) + "\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li><a class=\"sort\" href=\"#\" data-sort=\"firstName\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.first_name", {hash:{}}) : helperMissing.call(depth0, "t", "people.first_name", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a class=\"sort\" href=\"#\" data-sort=\"lastName\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.last_name", {hash:{}}) : helperMissing.call(depth0, "t", "people.last_name", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n    <button class=\"btn refresh\" href=\"#\"><i class=\"icon-refresh\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.all", {hash:{}}) : helperMissing.call(depth0, "t", "people.all", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n  </div>    \n  <div class=\"btn-group pull-right\">\n    <button class=\"btn btn-success\" href=\"#\"><i class=\"icon-user icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.register", {hash:{}}) : helperMissing.call(depth0, "t", "people.register", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n  </div>\n</div>\n\n\n";
  return buffer;});

this["Templates"]["people/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  ";
  stack1 = {};
  stack1['field'] = "firstName";
  stack2 = depth0.firstName;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['required'] = true;
  stack1['label'] = "people.first_name";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "lastName";
  stack2 = depth0.lastName;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['required'] = true;
  stack1['label'] = "people.last_name";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  \n  ";
  stack1 = {};
  stack1['field'] = "gender";
  stack2 = depth0.gender;
  stack1['value'] = stack2;
  stack1['width'] = "150px";
  stack1['options'] = "male female";
  stack1['label'] = "people.gender";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "select", {hash:stack1}) : helperMissing.call(depth0, "include", "select", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "title";
  stack2 = depth0.title;
  stack1['value'] = stack2;
  stack1['width'] = "150px";
  stack1['options'] = "mr mrs miss ms dr";
  stack1['label'] = "people.title";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "select", {hash:stack1}) : helperMissing.call(depth0, "include", "select", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n\n  ";
  stack1 = {};
  stack1['field'] = "email";
  stack2 = depth0.email;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['label'] = "people.email";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "telephone";
  stack2 = depth0.telephone;
  stack1['value'] = stack2;
  stack1['width'] = 2;
  stack1['label'] = "people.telephone";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n</fieldset>\n";
  return buffer;});

this["Templates"]["people/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-page=\"";
  foundHelper = helpers.page;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"item ";
  foundHelper = helpers.active;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.active; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/";
  foundHelper = helpers.page;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n	<small>";
  stack1 = depth0.group;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</small>\n	<i class=\"icon-chevron-right\"></i>\n</a>\n";
  return buffer;});

this["Templates"]["people/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header class=\"navbar\" id=\"filter\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <nav id=\"selector\"></nav>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\">\n        <div id=\"menu\"></div>\n\n        <div id=\"message\"></div>\n\n        <div id=\"inner\"></div>\n\n        <aside id=\"aside\" class=\"auto-height\"></aside>\n      </div>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["people/menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"navbar navbar-static-top\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" data-page=\"info\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n    <ul class=\"nav\">\n      <li><a data-page=\"info\" data-action=\"photo\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.info", {hash:{}}) : helperMissing.call(depth0, "t", "people.info", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"photos\" data-action=\"photo\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "photos.photos", {hash:{}}) : helperMissing.call(depth0, "t", "photos.photos", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"documents\" data-action=\"document\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/documents\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.documents", {hash:{}}) : helperMissing.call(depth0, "t", "documents.documents", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"account\" data-action=\"photo\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/account\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.account", {hash:{}}) : helperMissing.call(depth0, "t", "people.account", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"permissions\" data-action=\"photo\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/permissions\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.permissions", {hash:{}}) : helperMissing.call(depth0, "t", "people.permissions", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n    <ul class=\"nav pull-right action\">\n      <li><a data-page=\"photo\" data-action=\"photo\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photo\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "photos.upload", {hash:{}}) : helperMissing.call(depth0, "t", "photos.upload", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"document\" data-action=\"document\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/document\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "documents.upload", {hash:{}}) : helperMissing.call(depth0, "t", "documents.upload", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n  </div>\n</div>\n";
  return buffer;});

this["Templates"]["people/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "register.html";});

this["Templates"]["people/selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<ul class=\"list\"></ul>\n\n<div class=\"pagination pagination-centered\"></div>";});

this["Templates"]["people/summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<h4 class=\"person ";
  foundHelper = helpers.gender;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.gender; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " <small>";
  stack1 = depth0.group;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</small></h4>\n<div class=\"image\"><img src=\"/api/photos/";
  foundHelper = helpers.defaultPhoto;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.defaultPhoto; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/view/small\"></img></div>\n<p>\n  <a href=\"tel:";
  foundHelper = helpers.telephone;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.telephone; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.telephone;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.telephone; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a>\n</p>\n<p>\n  <a href=\"mailto:";
  foundHelper = helpers.email;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.email;
  foundHelper = helpers.formatEmail;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "formatEmail", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n</p>\n<button class=\"btn btn-danger\" href=\"#\"><i class=\"icon-ban-circle icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.archive", {hash:{}}) : helperMissing.call(depth0, "t", "people.archive", {hash:{}});
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</button>\n";
  return buffer;});

this["Templates"]["photos/container"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"photos\"></div>\n\n<div id=\"photo-modal\" class=\"reveal-modal\">\n  <img></img>\n  <a class=\"close-reveal-modal\">&times;</a>\n</div>";});

this["Templates"]["photos/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert fade in\">\n  <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "photos.not_found", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "photos.not_found", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n</div>\n";
  return buffer;});

this["Templates"]["photos/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"image caption-bottom\">\n  <img src=\"/api/photos/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/view/small\" data-image=\"/api/photos/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/view/large\"></img>\n  <a class=\"default\" href=\"#\">&nbsp;</a>\n  <a class=\"delete\" href=\"#\">&nbsp;</a>\n  <figcaption>";
  foundHelper = helpers.caption;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.caption; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</figcaption>\n</div>\n";
  return buffer;});

this["Templates"]["photos/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  ";
  stack1 = {};
  stack1['field'] = "caption";
  stack2 = depth0.caption;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['label'] = "photos.caption";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['field'] = "file";
  stack1['width'] = 4;
  stack1['label'] = "photos.image";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "file", {hash:stack1}) : helperMissing.call(depth0, "include", "file", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['icon'] = "upload";
  stack1['loading'] = "general.uploading";
  stack1['text'] = "photos.upload";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "button", {hash:stack1}) : helperMissing.call(depth0, "include", "button", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n</fieldset>\n";
  return buffer;});

this["Templates"]["security/register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3><small><i class=\"icon-user\"></i></small>&nbsp;";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.register", {hash:{}}) : helperMissing.call(depth0, "t", "security.register", {hash:{}});
  buffer += escapeExpression(stack1) + " <small>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.enter_credentials", {hash:{}}) : helperMissing.call(depth0, "t", "security.enter_credentials", {hash:{}});
  buffer += escapeExpression(stack1) + " &rarr;</small></h3>\n</div>\n\n<div class=\"modal-body\">\n  <form>\n    <fieldset>\n      <span class=\"input-append\">\n        <input type=\"text\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.user_or_email", {hash:{}}) : helperMissing.call(depth0, "t", "security.user_or_email", {hash:{}});
  buffer += escapeExpression(stack1) + "\" name=\"username\" id=\"username\" class=\"span3\">\n        <span class=\"add-on\"><i class=\"icon-user\"></i></span>\n      </span>\n      <span class=\"input-append\" style=\"margin-left: 10px\">\n        <input type=\"password\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.password", {hash:{}}) : helperMissing.call(depth0, "t", "security.password", {hash:{}});
  buffer += escapeExpression(stack1) + "\" name=\"password\" id=\"password\" class=\"span2\">\n        <span class=\"add-on\"><i class=\"icon-lock\"></i></span>\n      </span>\n    </fieldset> \n  </form>\n\n  <div class=\"alert alert-error hide\"></div>\n\n</div>\n\n<div class=\"modal-footer\" style=\"text-align: left\">\n  <button class=\"btn btn-success\" id=\"signon\"><i class=\"icon-lock icon-white\"></i>&nbsp;&nbsp;";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.register", {hash:{}}) : helperMissing.call(depth0, "t", "security.register", {hash:{}});
  buffer += escapeExpression(stack1) + " &rarr;</button>\n  <button class=\"btn btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.cancel", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "general.cancel", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n</div>\n";
  return buffer;});

this["Templates"]["security/signedon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<ul class=\"nav\">\n	<li class=\"active\"><a href=\"#profile\"><span class=\"mute\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signed_on", {hash:{}}) : helperMissing.call(depth0, "t", "security.signed_on", {hash:{}});
  buffer += escapeExpression(stack1) + "</span> ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></li>\n	<li><a href=\"#switch\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.switch", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "security.switch", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n	<li><a href=\"#signout\" class=\"signout\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signout", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "security.signout", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n</ul>\n";
  return buffer;});

this["Templates"]["security/signedout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav\">\n	<li class=\"active\"><a href=\"#signon\" class=\"signon\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signon", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "security.signon", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n	<li><a href=\"#register\" class=\"register\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.register", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "security.register", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n</ul>\n";
  return buffer;});

this["Templates"]["security/signon"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  <h3><small><i class=\"icon-lock\"></i></small>&nbsp;";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signon", {hash:{}}) : helperMissing.call(depth0, "t", "security.signon", {hash:{}});
  buffer += escapeExpression(stack1) + " <small>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.enter_credentials", {hash:{}}) : helperMissing.call(depth0, "t", "security.enter_credentials", {hash:{}});
  buffer += escapeExpression(stack1) + " &rarr;</small></h3>\n</div>\n\n<div class=\"modal-body\">\n	<form>\n	  <fieldset>\n      <label for=\"code\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.organisation_code", {hash:{}}) : helperMissing.call(depth0, "t", "security.organisation_code", {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n      <div class=\"input-prepend\">\n        <span class=\"add-on\"><i class=\"icon-globe\"></i></span>\n        <input type=\"text\" name=\"code\" id=\"code\" class=\"span2\">\n      </div>\n      <label for=\"name\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.user_or_email", {hash:{}}) : helperMissing.call(depth0, "t", "security.user_or_email", {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n      <div class=\"input-prepend\">\n        <span class=\"add-on\"><i class=\"icon-user\"></i></span>\n        <input type=\"text\" name=\"name\" id=\"name\" class=\"span4\">\n      </div>\n      <label for=\"password\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.password", {hash:{}}) : helperMissing.call(depth0, "t", "security.password", {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n			<div class=\"input-prepend\">\n        <span class=\"add-on\"><i class=\"icon-lock\"></i></span>\n    		<input type=\"password\" name=\"password\" id=\"password\" class=\"span4\">\n			</div>\n	  </fieldset>	\n	</form>\n\n	<div class=\"alert alert-error hide\"></div>\n\n  <div>\n  	<button class=\"btn btn-primary\" id=\"facebook\"><i class=\"icon-facebook icon-white\"></i>&nbsp;&nbsp;Facebook</button>\n  	<button class=\"btn btn-info\" id=\"twitter\"><i class=\"icon-twitter icon-white\"></i>&nbsp;&nbsp;Twitter</button>\n  </div>\n</div>\n\n<div class=\"modal-footer\" style=\"text-align: left\">\n  <button class=\"btn btn-success\" id=\"signon\"><i class=\"icon-lock icon-white\" data-loading-text=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signing_on", {hash:{}}) : helperMissing.call(depth0, "t", "security.signing_on", {hash:{}});
  buffer += escapeExpression(stack1) + "...\"></i>&nbsp;&nbsp;";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signon", {hash:{}}) : helperMissing.call(depth0, "t", "security.signon", {hash:{}});
  buffer += escapeExpression(stack1) + " &rarr;</button>\n  <button class=\"btn btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.cancel", "lower", {hash:{}}) : helperMissing.call(depth0, "t", "general.cancel", "lower", {hash:{}});
  buffer += escapeExpression(stack1) + "</button>\n</div>\n";
  return buffer;});

this["Templates"]["support/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header id=\"top\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <div id=\"summary\"></div>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\">\n        <div id=\"menu\"></div>\n\n        <div id=\"message\"></div>\n\n        <div id=\"inner\"></div>\n\n        <aside id=\"aside\" class=\"auto-height\"></aside>\n      </div>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["support/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.support", {hash:{}}) : helperMissing.call(depth0, "t", "main.support", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n\n<ul class=\"nav nav-pills\">\n</ul>\n";
  return buffer;});

this["Templates"]["administration/organisations/roles/add"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<fieldset>\n  ";
  stack1 = {};
  stack1['field'] = "name";
  stack2 = depth0.name;
  stack1['value'] = stack2;
  stack1['width'] = 4;
  stack1['required'] = true;
  stack1['label'] = "organisations.role_name";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "input", {hash:stack1}) : helperMissing.call(depth0, "include", "input", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n  ";
  stack1 = {};
  stack1['icon'] = "user";
  stack1['loading'] = "general.saving";
  stack1['text'] = "organisations.add_role";
  foundHelper = helpers.include;
  stack1 = foundHelper ? foundHelper.call(depth0, "button", {hash:stack1}) : helperMissing.call(depth0, "include", "button", {hash:stack1});
  buffer += escapeExpression(stack1) + "\n</fieldset>\n";
  return buffer;});

this["Templates"]["administration/organisations/roles/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert fade in\">\n  <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "organisations.no_roles", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "organisations.no_roles", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n</div>\n";
  return buffer;});

this["Templates"]["administration/organisations/roles/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"accordion-heading\">\n  <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#roles\" href=\"#";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n    ";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\n  </a>\n</div>\n<div id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" class=\"accordion-body collapse\">\n  <div class=\"accordion-inner\">\n    ";
  stack1 = depth0.claims;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.length;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\n  </div>\n</div>\n";
  return buffer;});

this["Templates"]["administration/organisations/roles/roles"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"accordian\" id=\"roles\"></div>";});

this["Templates"]["app/common/help"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h4>";
  stack1 = depth0.title;
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "t", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</h4>\n<p>";
  stack1 = depth0.content;
  foundHelper = helpers.markdown;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:{}}) : helperMissing.call(depth0, "markdown", stack1, {hash:{}});
  buffer += escapeExpression(stack1) + "</p>";
  return buffer;});

this["Templates"]["app/common/page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<li class=\"";
  foundHelper = helpers.className;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.className; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" ><a href=\"#\" class=\"page\">";
  foundHelper = helpers.number;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.number; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a></li>";
  return buffer;});

this["Templates"]["app/common/paging"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<li><a href=\"#\" class=\"first\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.first", {hash:{}}) : helperMissing.call(depth0, "t", "general.first", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"bottom\">&laquo;</a></li>\n<li><a href=\"#\" class=\"prev\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.previous", {hash:{}}) : helperMissing.call(depth0, "t", "general.previous", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"bottom\">&lsaquo;</a></li>\n<span class=\"pages\"></span>\n<li><a href=\"#\" class=\"next\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.next", {hash:{}}) : helperMissing.call(depth0, "t", "general.next", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"bottom\">&rsaquo;</a></li>\n<li><a href=\"#\" class=\"last\" rel=\"tooltip\" title=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "general.last", {hash:{}}) : helperMissing.call(depth0, "t", "general.last", {hash:{}});
  buffer += escapeExpression(stack1) + "\" data-placement=\"bottom\">&raquo;</a></li>\n";
  return buffer;});

this["Templates"]["app/layout/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<header id=\"header\"></header>\n\n<div id=\"main\">\n  <nav id=\"primary\"></nav>\n\n  <div id=\"contents\"></div>\n</div>\n\n<div id=\"bg\"></div>\n\n<div id=\"modal\" class=\"modal hide fade\"></div>\n";});