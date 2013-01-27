Proof.module("Common.Models", function(Models, App, Backbone, Marionette, $, _, Paginator) {

  var setAuthorizationHeader = function(opts) {
    var options = opts;

    if (App.Global.session) {
      options = _.extend({ 
        headers: { "Authorization": "Basic " + App.Global.session.authenticationToken() }
      }, opts);
    }
    
    return options;    
  }

  Models.SecuredCollection = Paginator.clientPager.extend({

    sync: function(method, model, options) {
      return this._super(method, model, setAuthorizationHeader(options));
    }

  , defaultErrorHandler: function(model, error) {
      if (error.status === 403) {
        App.vent.trigger("security:unauthorised", this);
      }
    }

  , paginator_ui: {
      perPage       : 10
    , pagesInRange  : 1
    }

  , sort: function(property) {
      var direction = "asc";
      if (property === this.sortColumn) direction = this.sortDirection === "asc" ? "desc" : "asc";
      this.setSort(property, direction);
    }

  , pages: function() {  

      var getClass = function(current, p) {
        if (current === p) return "active";
      }

      var that = this, p = [];

      if (this.information) {
        _.each(_.range(1, this.information.totalPages+1), function(i) {
        // _.each(this.information.pageSet, function(i) {
          p.push({ number: i, className: getClass(that.currentPage, i) });
        });
      }

      return p;
    }
  });

  Models.Model = Backbone.Model.extend({

    sync: function(method, model, options) {
      return this._super(method, model, setAuthorizationHeader(options));
    }

  , defaultErrorHandler: function(model, error) {
      if (error.status === 403) {
        App.vent.trigger("security:unauthorised", this);
      }
    }
  });

}, Backbone.Paginator);
