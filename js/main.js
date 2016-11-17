(function(){
	
	window.App = {
		Views: {},
		Models: {},
		Collections : {},
		Router:{}
	};
	
 var vent = _.extend({}, Backbone.Events);	
	
App.Views.SpecialTasks = Backbone.View.extend({
	initialize: function () {
		vent.on('specialTasks:show' , this.show, this);
	},
	show: function (id) {
		var spcial = this.collection.get('id');
		var specialTaskView = new App.Views.spcialTask({model:spcialTask});
		$('body').append(spcialTaskView.render().el);
	}
});	
	
App.Router = Backbone.Router.extend({
   routes:{
	'': 'start',
	'specialTasks/ :id' : 'showSpecialTasks'
   },

     showSpecialTasks: function function_name (id) {
		vent.trigger('specialTasks:show', id);
   },
   
    start: function() {
		console.log('Стартовая страница' );
   },
});
  
   new App.Views.SpecialTasks({collection: someCollection});
   
   new App.Router;
   Backbone.history.start();
   
}) ();
