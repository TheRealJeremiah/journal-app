JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: 'posts',
  model: JournalApp.Models.Post,
  getOrFetch: function (id) {
    var post = new this.model({id: id});
    post.fetch({
      success: function(model) {
        return model;
      },
      error: function(model) {
        model.save();
        return model;
      }
    });
  }
});
