JournalApp.Router = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new" : "postsNew",
    "posts/:id" : "postsShow"
  },

  initialize: function () {
    this.postsIndex();
  },

  postsIndex: function () {
    if(this.collection === undefined) {
      this.collection = new JournalApp.Collections.Posts();
    }
    this.collection.fetch({
      success: function (collection) {
        var view = new JournalApp.Views.PostsIndex({collection: collection});
        $('.sidebar').html(view.render().$el)
      }
    });
  },

  postsShow: function(id) {
    var model = new JournalApp.Models.Post({id: id});
    if(this.collection === undefined) {
      this.collection = new JournalApp.Collections.Posts();
    }
    model.fetch({
      success: function(model) {
        var view = new JournalApp.Views.PostsShow({model: model, collection: this.collection});
        $('.content').html(view.render().$el)
      }.bind(this)
    })
  },

  postsNew: function() {
    var model = new JournalApp.Models.Post();
    if(this.collection === undefined) {
      this.collection = new JournalApp.Collections.Posts();
    }
    var view = new JournalApp.Views.PostForm({model: model, collection: this.collection});
    $('.content').html(view.render().$el);
  }
})
