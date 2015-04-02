JournalApp.Views.PostsShow = Backbone.View.extend({
  template: JST['posts/show'],
  events: {
    "dblclick .showTitle": "editTitle",
    "dblclick .showBody": "editBody",
    "submit .editTitle" : "updateTitle",
    "submit .editBody" : "updateBody"
  },

  render: function () {
    this.$el.empty();
    var content = this.template({post: this.model});
    this.$el.html(content);

    return this;
  },

  editTitle: function () {
    var form = JST['posts/title_form']({post: this.model});
    $('.showTitle').html(form);
  },

  updateTitle: function (event) {
   event.preventDefault();

   var postAttr = $(event.currentTarget).serializeJSON()['post'];

   this.model.save(postAttr, {
     success: function (model) {
       this.collection.add(model, { merge: true })
       $('.showTitle').html(model.get("title"))
     }.bind(this)
   })
  },

  editBody: function () {
    var form = JST['posts/body_form']({post: this.model});
    $('.showBody').html(form);
  },

  updateBody: function (event) {
   event.preventDefault();

   var postAttr = $(event.currentTarget).serializeJSON()['post'];

   this.model.save(postAttr, {
     success: function (model) {
       this.collection.add(model, { merge: true })
       $('.showBody').html(model.get("body"))
     }.bind(this)
   })
  }
});
