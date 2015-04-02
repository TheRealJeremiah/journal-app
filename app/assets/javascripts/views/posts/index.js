JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add change sync remove', this.render);
  },

  render: function () {
    this.$el.empty();
    // var content = this.template({posts: this.collection});
    this.collection.each(function(post) {
      var item = new JournalApp.Views.PostsItem({model: post});
      this.$el.append(item.render().$el);
    }.bind(this));
    this.$el.append("<a href='#posts/new'>Create</a>");
    return this;
  }
});
