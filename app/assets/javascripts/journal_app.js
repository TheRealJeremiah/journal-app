window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new JournalApp.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
