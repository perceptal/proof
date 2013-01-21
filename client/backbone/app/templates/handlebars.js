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
  buffer += escapeExpression(stack1) + " fade in\">\n	<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n  ";
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

this["Templates"]["people/aside"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<h4>People <small>...</small></h4>\n";});

this["Templates"]["people/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"active\" href=\"#people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "<i class=\"icon-chevron-right\"></i></a>\n";
  return buffer;});

this["Templates"]["people/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header class=\"navbar\" id=\"top\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <nav id=\"selector\"></nav>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\"></div>\n\n      <aside id=\"aside\" class=\"auto-height\"></aside>\n    </section>\n\n  </div>\n</div>\n";});

this["Templates"]["people/navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.people", {hash:{}}) : helperMissing.call(depth0, "t", "main.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</h1>\n<form class=\"navbar-form pull-left\">\n  <input type=\"text\" class=\"span3 search\" id=\"search\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.search", {hash:{}}) : helperMissing.call(depth0, "t", "people.search", {hash:{}});
  buffer += escapeExpression(stack1) + "&rarr;\"/>\n</form>\n\n<ul class=\"filter\">\n  <li class=\"active\"><a href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.all", {hash:{}}) : helperMissing.call(depth0, "t", "people.all", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li><a href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.filter", {hash:{}}) : helperMissing.call(depth0, "t", "people.filter", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n</ul>\n\n<ul class=\"pull-right\">\n  <li><button class=\"btn btn-success\" href=\"#\"><i class=\"icon-user icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.register", {hash:{}}) : helperMissing.call(depth0, "t", "people.register", {hash:{}});
  buffer += escapeExpression(stack1) + "</button></li>\n</ul>\n";
  return buffer;});

this["Templates"]["people/temp"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"navbar navbar-static-top\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" href=\"#\">Emma</a>\n    <ul class=\"nav\">\n      <li class=\"active\"><a href=\"#\">Info</a></li>\n      <li><a href=\"#\">Photos</a></li>\n      <li><a href=\"#\">Documents</a></li>\n    </ul>\n    <ul class=\"nav pull-right action\">\n      <li><a href=\"#\">Upload Photo</a></li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"inner\">\n  <div class=\"alert alert-info fade in\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n    <i class=\"icon-info-sign\"></i><strong> Nice one</strong>, you done good.\n  </div>\n\n  <div class=\"alert fade in\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n    <i class=\"icon-exclamation-sign\"></i><strong> Unfortunately</strong>, there seems to be an issue.\n  </div>\n\n  <div class=\"alert alert-error fade in\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n    <i class=\"icon-ban-circle\"></i><strong> Houston</strong>, we have a problem.\n  </div>\n</div>";});

this["Templates"]["person/aside"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
  buffer += escapeExpression(stack1) + "/photos/small\"></img></div>\n<p>\n  <div class=\"info\">01896 830894</div>\n  <a href=\"mailto:";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">emma at watson dot com</a>\n</p>\n<button class=\"btn btn-danger\" href=\"#\"><i class=\"icon-ban-circle icon-white\"></i> Archive ";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</button>\n";
  return buffer;});

this["Templates"]["person/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div id=\"pages\">\n  <header class=\"navbar\" id=\"top\"></header>\n\n  <div id=\"page\">\n    <div id=\"sidebar\" class=\"auto-height\">\n      <nav id=\"selector\"></nav>\n    </div>\n\n    <section>\n      <div id=\"content\" class=\"auto-height\"></div>\n\n      <aside id=\"aside\" class=\"auto-height\"></aside>\n    </section>\n\n  </div>\n</div>\n";});

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

this["Templates"]["app/common/paging"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div>Paging2</div>";});

this["Templates"]["app/layout/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<header id=\"header\"></header>\n\n<div id=\"main\">\n  <nav id=\"primary\"></nav>\n\n  <div id=\"contents\"></div>\n</div>\n\n<div id=\"bg\"></div>\n\n<div id=\"modal\" class=\"modal hide fade\"></div>\n";});