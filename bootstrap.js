var App = require("./app")
  , provider = require("./configuration/provider")
  ;

var Store = provider("store")
	, app = new App(new Store());

app.start();		

