this["Templates"] = this["Templates"] || {};

this["Templates"]["app/footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"muted credit\">\n&copy;\n<a href=\"http://perceptal.co.uk/\">Perceptal Engineering</a>\n2013\n\n<a class=\"locale fr ";
  foundHelper = helpers.isSelected;
  stack1 = foundHelper ? foundHelper.call(depth0, "fr", {hash:{}}) : helperMissing.call(depth0, "isSelected", "fr", {hash:{}});
  buffer += escapeExpression(stack1) + "\" href=\"/language/fr\" data-locale=\"fr\">Français</a>\n<a class=\"locale de ";
  foundHelper = helpers.isSelected;
  stack1 = foundHelper ? foundHelper.call(depth0, "de", {hash:{}}) : helperMissing.call(depth0, "isSelected", "de", {hash:{}});
  buffer += escapeExpression(stack1) + "\" href=\"/language/de\" data-locale=\"de\">Deutsch</a>\n<a class=\"locale en ";
  foundHelper = helpers.isSelected;
  stack1 = foundHelper ? foundHelper.call(depth0, "en", {hash:{}}) : helperMissing.call(depth0, "isSelected", "en", {hash:{}});
  buffer += escapeExpression(stack1) + "\" href=\"/language/en\" data-locale=\"en\">English</a>\n</p>\n";
  return buffer;});

this["Templates"]["app/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<nav class=\"navbar navbar-inverse navbar-fixed-top primary\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      \n      <div id=\"navigation\"></div>\n\n      <div id=\"security\" class=\"pull-right navbar-text\"></div>\n\n    </div>\n  </div>\n</nav>\n";});

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


  buffer += "<a class=\"brand\" href=\"#\"><span class=\"logo\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.title", {hash:{}}) : helperMissing.call(depth0, "t", "main.title", {hash:{}});
  buffer += escapeExpression(stack1) + "</span></a>\n<ul class=\"nav\">\n  <li class=\"home\"><a href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.home", {hash:{}}) : helperMissing.call(depth0, "t", "main.home", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li class=\"people\"><a href=\"#people\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.people", {hash:{}}) : helperMissing.call(depth0, "t", "main.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li class=\"administration\"><a href=\"#administration\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.administration", {hash:{}}) : helperMissing.call(depth0, "t", "main.administration", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li class=\"about\"><a href=\"#about\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.about", {hash:{}}) : helperMissing.call(depth0, "t", "main.about", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n  <li class=\"support\"><a href=\"#support\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.support", {hash:{}}) : helperMissing.call(depth0, "t", "main.support", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n</ul>\n";
  return buffer;});

this["Templates"]["home/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"well\">\n  <strong>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "main.home", {hash:{}}) : helperMissing.call(depth0, "t", "main.home", {hash:{}});
  buffer += escapeExpression(stack1) + "</strong>\n</div>\n";
  return buffer;});

this["Templates"]["people/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<article class=\"list\" data-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n	<div class=\"photo\"><img src=\"/api/people/";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "/photos/thumbnail\" data-fallback=\"/img/noprofile.png\" /></div>\n\n	<div class=\"info\">\n	    <div class=\"heading\">\n	        <strong>";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</strong>\n	        <span class=\"info\">";
  stack1 = depth0.user;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n	        <span class=\"info\">";
  stack1 = depth0.group;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span>\n	    </div>\n\n	    <div class=\"detail\">\n	        <span class=\"email\"><a href=\"mailto:emma@watson.com\">emma@watson.com</a></span>\n	        <span class=\"phone\">01896 830894</span>\n	    </div>\n	</div>\n\n	<ul>\n	    <li><a class=\"select\">open&rarr;</a></li>\n	</ul>\n</article>";
  return buffer;});

this["Templates"]["people/select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<nav class=\"navbar people\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.people", {hash:{}}) : helperMissing.call(depth0, "t", "people.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</a>\n\n		<form class=\"navbar-form pull-left\">\n		  <input type=\"text\" class=\"span2 search\" id=\"search\" placeholder=\"";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.search", {hash:{}}) : helperMissing.call(depth0, "t", "people.search", {hash:{}});
  buffer += escapeExpression(stack1) + "&rarr;\"/>\n		</form>\n\n    <ul class=\"nav nav-pills\">\n      <li class=\"active\"><a href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.all", {hash:{}}) : helperMissing.call(depth0, "t", "people.all", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n      <li><a href=\"#\">";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.filter", {hash:{}}) : helperMissing.call(depth0, "t", "people.filter", {hash:{}});
  buffer += escapeExpression(stack1) + "</a></li>\n    </ul>\n\n    <ul class=\"nav nav-pills pull-right\">\n      <li><button class=\"btn btn-success\" href=\"#\"><i class=\"icon-user icon-white\"></i> ";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.register", "titleize", {hash:{}}) : helperMissing.call(depth0, "t", "people.register", "titleize", {hash:{}});
  buffer += escapeExpression(stack1) + "</button></li>\n    </ul>\n  </div>\n</nav>\n\n";
  return buffer;});

this["Templates"]["people/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"well\">\n  <strong>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "people.people", {hash:{}}) : helperMissing.call(depth0, "t", "people.people", {hash:{}});
  buffer += escapeExpression(stack1) + "</strong>\n</div>\n";
  return buffer;});

this["Templates"]["person/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"well\">\n  <strong>";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " ";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</strong>\n</div>\n";
  return buffer;});

this["Templates"]["security/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n\n  <aside class=\"span3\" id=\"sidebar\">\n  </aside>\n\n  <div class=\"span9\">  \n\n      <div id=\"select\">\n      </div>\n\n    <div id=\"list\">\n    </div>\n\n</div>";});

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


  buffer += "<ul class=\"security\">\n	<li>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.signed_on", {hash:{}}) : helperMissing.call(depth0, "t", "security.signed_on", {hash:{}});
  buffer += escapeExpression(stack1) + " <a href=\"#profile\">";
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


  buffer += "<ul class=\"security\">\n	<li><a href=\"#signon\" class=\"signon\">";
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

this["Templates"]["app/layout/edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n\n  <aside class=\"span3\" id=\"sidebar\"></aside>\n\n  <div class=\"span9\">  \n    <div id=\"select\"></div>\n    <div id=\"summary\"></div>\n    <div id=\"edit\"></div>\n  </div>\n\n</div>";});

this["Templates"]["app/layout/list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n\n  <aside class=\"span3\" id=\"sidebar\"></aside>\n\n  <div class=\"span9\">  \n    <div id=\"select\"></div>\n    <div id=\"list\"></div>\n  </div>\n\n</div>";});

this["Templates"]["app/layout/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<header id=\"header\">\n</header>\n\n<div id=\"wrap\">\n  <div class=\"container top\">\n    <div id=\"message\"></div>\n    <div id=\"content\"></div>\n  </div>\n\n  <div id=\"push\"></div>\n</div>\n\n<div id=\"modal\" class=\"modal hide fade\"></div>\n\n<footer id=\"footer\"></footer>";});

this["Templates"]["app/layout/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"row\">\n\n  <aside class=\"span3\" id=\"sidebar\"></aside>\n\n  <div class=\"span9\">\n    <div id=\"content\"></div>\n  </div>  \n\n</div>";});

this["Templates"]["security/profile/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"well\">\n  <strong>";
  foundHelper = helpers['t'];
  stack1 = foundHelper ? foundHelper.call(depth0, "security.profile", {hash:{}}) : helperMissing.call(depth0, "t", "security.profile", {hash:{}});
  buffer += escapeExpression(stack1) + "</strong>\n</div>\n";
  return buffer;});