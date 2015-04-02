JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST['posts/post_form'],

  events: {
    'submit .newPost' : 'handleSubmit'
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  handleSubmit: function(event) {
    event.preventDefault()
    var postAttr = $(event.currentTarget).serializeJSON()['post'];

    this.model.save(postAttr, {
      success: function (model) {
        this.collection.add(model, {
          merge: true
        })
        document.getElementById("newPost").reset();
      }.bind(this)
    });
  }
});
