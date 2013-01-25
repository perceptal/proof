this["Templates"] = this["Templates"] || {};

this["Templates"]["app/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"navbar navbar-inverse\">\n  <div class=\"navbar-inner\">\n    <div class=\"container-fluid\">\n      <a class=\"brand\" href=\"#\"><span class=\"logo\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.title", {hash:{}}) : helperMissing.call(depth0, "t", "main.title", {hash:{}});
  buffer += escapeExpression(stack1) + "</span></a>\n\n      <div id=\"security\"></div>\n      <div id=\"locale\"></div>\n      \n    </div>\n  </div>\n</nav>";
  return buffer;});

this["Templates"]["app/locale"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<ul class=\"pull-right nav\">\n  <li class=\"fr\"><a class=\"locale\" href=\"#fr\" data-locale=\"fr\">français</a></li>\n  <li class=\"de\"><a class=\"locale\" href=\"#de\" data-locale=\"de\">deutsch</a></li>\n  <li class=\"en\"><a class=\"locale\" href=\"#en\" data-locale=\"en\">english</a></li>\n</ul>\n";});

this["Templates"]["app/message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"alert alert-";
  foundHelper = helpers.type;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " fade in\">\n	<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n  <i class=\"icon ";
  foundHelper = helpers.icon;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"></i>&nbsp;<strong>";
  foundHelper = helpers.strong;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.strong; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
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
  buffer += escapeExpression(stack1) + "\" data-placement=\"right\"><i class=\"icon-cog icon-white\"></i></a></li>\n</ul>\n";
  return buffer;});

this["Templates"]["documents/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  return escapeExpression(stack1);});

this["Templates"]["home/aside"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<h4>People <small>...</small></h4>\n";});

this["Templates"]["home/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header class=\"navbar\" id=\"top\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <nav id=\"selector\"></nav>\n    </div>\n\n    <section>\n      <div id=\"content\"></div>\n\n      <aside id=\"aside\" class=\"auto-height\"></aside>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["home/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.home", {hash:{}}) : helperMissing.call(depth0, "t", "main.home", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n";
  return buffer;});

this["Templates"]["people/empty"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div style=\"padding: 10px\">\n  <div class=\"alert fade in\">\n    <i class=\"icon-exclamation-sign\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.not_found", "capitalize", {hash:{}}) : helperMissing.call(depth0, "t", "people.not_found", "capitalize", {hash:{}});
  buffer += escapeExpression(stack1) + "\n  </div>\n</div>";
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

this["Templates"]["people/help"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h4>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.people", {hash:{}}) : helperMissing.call(depth0, "t", "main.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</h4>\n";
  return buffer;});

this["Templates"]["people/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<fieldset>\n  <div class=\"control-group\">\n    <label for=\"firstName\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.first_name", {hash:{}}) : helperMissing.call(depth0, "t", "people.first_name", {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"firstName\" name=\"firstName\" class=\"span4 required\" value=\"";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-error-style=\"inline\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label for=\"lastName\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.last_name", {hash:{}}) : helperMissing.call(depth0, "t", "people.last_name", {hash:{}});
  buffer += escapeExpression(stack1) + "</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"lastName\" name=\"lastName\" class=\"span4 required\" value=\"";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-error-style=\"inline\">\n    </div>\n  </div>\n</fieldset>\n";
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
  buffer += escapeExpression(stack1) + "</a>\n    <ul class=\"nav\">\n      <li><a data-page=\"info\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.info", {hash:{}}) : helperMissing.call(depth0, "t", "people.info", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"photos\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.photos", {hash:{}}) : helperMissing.call(depth0, "t", "people.photos", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a data-page=\"documents\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/documents\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.documents", {hash:{}}) : helperMissing.call(depth0, "t", "people.documents", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n    <ul class=\"nav pull-right action\">\n      <li><a data-page=\"new\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos/new\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.upload_photo", {hash:{}}) : helperMissing.call(depth0, "t", "people.upload_photo", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n  </div>\n</div>\n";
  return buffer;});

this["Templates"]["people/selector"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<ul class=\"list\"></ul>\n\n<div class=\"pagination pagination-centered\"></div>";});

this["Templates"]["people/summary"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4>";
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
  buffer += escapeExpression(stack1) + "</small></h4>\n<div class=\"image\"><img src=\"/api/people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos/view/small\"></img></div>\n<p>\n  <div class=\"info\">01896 830894</div>\n  <a href=\"mailto:";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">emma at watson dot com</a>\n</p>\n<button class=\"btn btn-danger\" href=\"#\"><i class=\"icon-ban-circle icon-white\"></i> Archive ";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</button>\n";
  return buffer;});

this["Templates"]["photos/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"image caption-bottom\">\n  <img src=\"/api/photos/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/view/small\"></img>\n  <a class=\"default\" href=\"#\">&nbsp;</a>\n  <a class=\"delete\" href=\"#\">&nbsp;</a>\n  <figcaption>";
  foundHelper = helpers.caption;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.caption; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</figcaption>\n</div>\n";
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