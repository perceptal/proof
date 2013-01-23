Proof.module("Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.PagingView = Marionette.ItemView.extend({
    template: "app/common/paging"

  , tagName: "ul"

  , events: {
      "click a.page"  : "gotoPage"
    , "click a.first" : "gotoFirst"
    , "click a.prev"  : "gotoPrev"
    , "click a.next"  : "gotoNext"
    , "click a.last"  : "gotoLast"
    }

  , ui: {
      pages: ".pages"
    , first: "a.first"
    , prev : "a.prev"
    , next : "a.next"
    , last : "a.last"
    , all  : "li"
    }

  , onRender: function() {
      var pages = ""
        , model = this.model;

      _.each(this.model.pages(), function(page) {
        pages += Marionette.Renderer.render("app/common/page", page);
      });

      this.ui.pages.replaceWith(pages);

      if (this.model.currentPage === 1) this.ui.prev.parent().addClass("disabled");
      if (this.model.currentPage === this.model.lastPage) this.ui.next.parent().addClass("disabled");
      if (this.model.pages().length === 1) {
        this.ui.all.addClass("disabled").removeClass("active");
      }
    }

  , gotoFirst: function(e) {
      e.preventDefault();
      this.model.goTo(1);
    }

  , gotoPrev: function(e) {
      e.preventDefault();
      this.model.previousPage();
    }

  , gotoNext: function(e) {
      e.preventDefault();
      this.model.nextPage();
    }

  , gotoLast: function(e) {
      e.preventDefault();
      this.model.goTo(this.model.information.lastPage);
    }

  , gotoPage: function(e) {
      e.preventDefault();
      var page = $(e.currentTarget).text();
      this.model.goTo(page);
    }
  });

});