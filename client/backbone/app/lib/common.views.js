Proof.module("Common.Views", function(Views, App, Backbone, Marionette, $, _) {

  var Region = Marionette.Region;

  Views.PagingView = Marionette.ItemView.extend({
    template: "lib/paging"

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
      if (this.model.information == null) return;

      var pages = ""
        , model = this.model;

      _.each(this.model.pages(), function(page) {
        pages += Marionette.Renderer.render("lib/page", page);
      });

      this.ui.pages.replaceWith(pages);

      if (this.model.currentPage === 1) this.ui.prev.parent().addClass("disabled");
      if (this.model.currentPage === this.model.information.lastPage) this.ui.next.parent().addClass("disabled");
      if (this.model.pages().length === 1) this.ui.all.addClass("disabled").removeClass("active");
      if (this.model.pages().length === 0 || this.model.information.totalRecords === 1) this.$el.hide();

      this.ui.all.filter("*[class!='disabled']").find("a").tooltip();
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

  Views.FilterView = Marionette.ItemView.extend({
    ui: {
      filter  : "input#search"
    , refresh : "button.refresh"
    , sort    : "a.sort"
    }

  , events: {
      "click button.refresh"  : "onRefresh"
    , "keyup input#search"    : "onFilter"
    , "click a.sort"          : "onSort"
    }

  , onRender: function() {
      this.delegateEvents();
      this.setSort("asc");
    }

  , setSort: function(direction) {
      this.ui.sort.find("small").remove();
      var icon = "icon-caret-" + (direction === "asc" ? "up" : "down");
      this.ui.sort.filter("[data-sort='" + (this.collection.sortColumn || this.defaultSortField) + "']")
        .append($("<small>&nbsp;<i class='icon " + icon + "'></i></small>"));
    }

  , onFilter: function(e) {
      this.collection.filter(this.ui.filter.val());

      if (this.collection.length === 1 && this.model !== this.collection.first()) {
        var first = this.collection.first();

        this.collection.clearActive();
        first.markActive();

        App.vent.trigger(this.section + ":selected", first);
      }
    }

  , onRefresh: function(e) {
      e.preventDefault();
      this.ui.filter.val("");
      this.collection.filter("");
    }

  , onSort: function(e) {
      e.preventDefault();
      this.collection.sort($(e.currentTarget).data("sort"));
      this.setSort(this.collection.sortDirection);
    }
  });

  Views.MenuView = Marionette.ItemView.extend({
    
    ui: {
      links: "a"
    , name: "a.brand"
    , actions: "ul.action a"
    }

  , events: {
      "click a": "onNavigate"
    }

  , initialize: function(options) {
      this.page = options.page;

      if (this.model) this.model.on("change", this.render, this);
    }

  , onRender: function() {
      this.delegateEvents();
      this.select(this.page);

      App.vent.on(this.section + ":navigate", function(page, action) {
        this.select(page, action);
      }, this);
   }

  , select: function(page, action) {
      this.page = page;

      this.ui.actions.parent().hide();
      this.ui.links.parent().removeClass("active");

      if (this.model) {  
        var link = this.ui.links.filter("[data-page='" + this.page + "']");

        link.parent().addClass("active");

        this.ui.actions.filter("[data-page='" + (link.data("action") || this.defaultAction) + "']").parent().show();
      } else {

        this.ui.links
          .attr("href", "")
          .parent()
            .removeClass("active")
            .addClass("disabled");
        this.ui.name.hide();
      }
     }

  , onNavigate: function(e) {
      e.preventDefault();

      if (this.model == null) return false;

      var page = $(e.currentTarget).data("page")
        , url = $(e.currentTarget).attr("href");

      this.select(page);

      App.vent.trigger(this.section + ":navigate", page, url);
    }
  });


  Views.SelectorView = Marionette.CompositeView.extend({

    itemViewContainer: "ul.list"

  , ui: {
      pagination      : "div.pagination"
    , list            : "ul.list"
    }

  , itemViewOptions: function(model) {
      return {
        collection: this.collection
      };
    }

  , initialize: function(options) {
      this.collection.setPage(options.page);
      App.vent.on(this.section + ":navigate", this.collection.setPage, this.collection);

      this.collection.on("reset", this.render, this);
      this.collection.on("change", this.render, this);
    }

  , onRender: function() {
      this.showPagination();
      this.padList();
    }

  , showPagination: function() {
      if (this.pagination) this.pagination.reset();
      this.pagination = new Region({ el: ".pagination" });
      this.pagination.show(new Views.PagingView({ model: this.collection }));
    }

  , padList: function() {
      if (this.collection.length > 0 && this.collection.length < 10) {
        for(var i=0; i<(10-this.collection.length); i++)
          this.ui.list.append("<li class='empty'><a>&nbsp;</a></li>");
      }
    }
  });

  Views.FormView = Marionette.ItemView.extend({
    tagName: "form"
  , className: "box"

  , initialize: function(options) {
      this.model.on("change", this.render, this);
    }

  , events: {
      "keypress input"          : "onKeypress"
    , "change   input"          : "onChangeInput"
    , "change   select"         : "onChangeSelect"
    , "click    button#save"    : "onSave"
    }

  , onRender: function() {
      this.delegateEvents();
      
      if (this.ui.selects) this.ui.selects.select2({ minimumResultsForSearch: 9999 });
      if (this.ui.tags) {
        this.ui.tags.select2({ 
          tags: this.allTags
        , tokenSeparators: [ "," ] 
        // , ajax: {
        //     url: "/api/documents/tags"
        //   , dataType: "json"
        //   , results: function(data, page) {
        //       return { results: _(data).map(function(item) { return { id: item, text: item }; }) }
        //     }
        //   } 
        // , createSearchChoice: function(term, data) { 
        //     if ($(data).filter(function() { 
        //       return this.text.localeCompare(term) === 0; 
        //     }).length === 0) {
        //       return { id:term, text:term}; } 
        //   }
        });
      }

      this.setFocus();
    }

  , setFocus: function() {
      if (this.focus) this.ui[this.focus].focus();
    }

  , onKeypress: function(e) {
      if (e.keyCode === 13) this.onChange(e);
    }

  , onChangeInput: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.val();

      if (field.attr("type") === "file") return;

      if (prop === "tags") value = value.split(",");

      this.onChange(prop, field, value);
    }

  , onChangeSelect: function(e) {
      var prop = e.currentTarget.id
        , field = this.ui[prop]
        , value = field.find(":selected").attr("id");

      this.onChange(prop, field, value);
    }

  , onChange: function(prop, field, value) {
      var previous = this.model.get(prop);
      
      this.model.off("change", this.render, this);    // Remove change event to ensure focus fires

      this.model.set(prop, value);
      
      if (this.model.isValid(true)) {
        if (this.autoSave) {
          this.save(
            function(model) { model.set(prop, value); }
          , function(model) { model.set(prop, previous); }
          );
        }
      } else {
        this.model.set(prop, previous);
      }
      
      this.model.on("change", this.render, this);   // Rebind change event
    }

    , onSave: function(e) {
        e.preventDefault();
        
        var save = this.ui.save;

        if (this.model.isValid(true)) {
          save.button("loading");
          this.save(_(this.afterSave).bind(this), function() { save.button("reset"); });
        };
      }

    , save: function(success, fail, always) {
        var model = this.model
          , messages = this.messages;
        
        this.model.save()  
          .success(function() {
            if (success) success(model); 
            App.vent.trigger("message:clear");
          })
          
          .fail(function() {
            if (fail) fail(model);
            App.vent.trigger("message:show", i18n.t("error." + messages.error));
          })
          
          .always(function() {
            if (always) always(model);
          });
        
        return false;
      }
  });

  Views.UploadView = Views.FormView.extend({
    save: function(success, fail) {

      this.model.setFile(this.ui.file);

      return this._super(success, fail);
    }
  });

});