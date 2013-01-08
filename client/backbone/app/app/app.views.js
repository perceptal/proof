Proof.module("Views", function(Views, App, Backbone, Marionette, $, _) {

	Views.HeaderView = Marionette.ItemView.extend({
	    template: "app/header"

	});

	Views.FooterView = Marionette.ItemView.extend({
	    template: "app/footer"

	  , className: "container"
	});

	Views.Layout = Marionette.Layout.extend({
	  	template: "app/layout"

	  ,	el: "body"

	  , regions: {
	    		header: "#header"
	    	, main  : "#content"
	    	, footer: "#footer"
	  	}

	  , initialize: function() {
	  		this.headerView = new Views.HeaderView();
	  		this.footerView = new Views.FooterView();
	  	}

	  , onRender: function() {
	  		this.header.show(this.headerView);
	  		this.footer.show(this.footerView);
	  	}
	});

	Views.addInitializer(function() {
		App.layout = new Views.Layout();
		App.layout.render();
	});

});