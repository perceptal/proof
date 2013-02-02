Proof.module("Administration.Organisations.Views", function(Views, App, Backbone, Marionette, $, _) {

  var FormView = App.Common.Views.FormView;

  Views.RoleItemView = Marionette.ItemView.extend({
    template: "administration/organisations/roles/item"

  , events: {
    }

  });

  Views.EmptyRolesView = Marionette.ItemView.extend({
    template: "administration/organisations/roles/empty"

  });

  Views.SecurityView = Marionette.CollectionView.extend({

    itemView: Views.RoleItemView

  , emptyView: Views.EmptyRolesView

  , initialize: function() {
      this.collection.bind("change", this.render, this.collection);
      this.collection.bind("reset", this.render, this.collection);
    }
  });

  Views.AddRoleView = FormView.extend({
    template: "administration/organisations/roles/add"

  , ui: {
      name            : "input#name"
    }

  , messages: {
      error           : "organisations.role"
    }

  , initialize: function() {
      this.autoSave = false;
      this.focus = "name";
    }

  , afterSave: function(role) {
      App.vent.trigger("organisations:navigate", "security", "administration/organisations/" + role.get("organisation") + "/security");
    }
  });
});