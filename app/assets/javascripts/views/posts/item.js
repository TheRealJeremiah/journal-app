JournalApp.Views.PostsItem = Backbone.View.extend({
  events: {
    'click .delete' : 'handleClick'
  },
  tagName: 'li',
  template: JST['posts/item'],
  initialize: function () {
    this.listenTo(this.model, "sync destroy", this.render);
  },
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  handleClick: function(event) {
    this.model.destroy();
  }
});
 
